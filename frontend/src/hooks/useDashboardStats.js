import { useState, useEffect, useCallback, useMemo } from 'react';
import { dashboardAPI } from '../lib/api';
import { transformFiltersForAPI } from '../utils/filterTransformer';

// Cache TTL for dashboard stats (10 minutes for longer caching)
const DASHBOARD_CACHE_TTL = 10 * 60 * 1000;

// Dashboard cache helpers
const getDashboardCacheKey = (filters) => {
  const filterString = JSON.stringify(filters);
  return `dashboard_stats_${btoa(filterString)}`;
};

const getCachedDashboardStats = (cacheKey) => {
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();
    
    if (now - timestamp > DASHBOARD_CACHE_TTL) {
      sessionStorage.removeItem(cacheKey);
      return null;
    }
    
    return data;
  } catch (error) {
    console.warn('Dashboard cache read error:', error);
    return null;
  }
};

const setCachedDashboardStats = (cacheKey, data) => {
  try {
    const cacheItem = {
      data,
      timestamp: Date.now()
    };
    sessionStorage.setItem(cacheKey, JSON.stringify(cacheItem));
  } catch (error) {
    console.warn('Dashboard cache write error:', error);
  }
};

export const useDashboardStats = (filters = {}) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Transform filters to API format and memoize
  const apiFilters = useMemo(() => {
    return transformFiltersForAPI(filters);
  }, [
    filters?.dateRange?.startDate,
    filters?.dateRange?.endDate,
    filters?.selectedForests,
    filters?.species
  ]);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Generate cache key
      const cacheKey = getDashboardCacheKey(apiFilters);
      
      // Try to get cached data first
      const cachedData = getCachedDashboardStats(cacheKey);
      if (cachedData) {
        setStats(cachedData);
        setLoading(false);
        return;
      }
      
      // Fetch fresh data if not in cache
      const response = await dashboardAPI.getEnhancedStats(apiFilters);
      const responseData = response.data;
      
      // Cache the fresh data
      setCachedDashboardStats(cacheKey, responseData);
      setStats(responseData);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setError(err.message || 'Failed to fetch dashboard statistics');
    } finally {
      setLoading(false);
    }
  }, [apiFilters]);

  // Fetch data when filters change
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const refresh = useCallback(() => {
    fetchStats();
  }, [fetchStats]);

  return {
    stats,
    loading,
    error,
    refresh
  };
};