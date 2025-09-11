// frontend/src/lib/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Render URL in prod, http://localhost:5000 in dev
});

// --- Request interceptor: attach a clean token only where needed ---
api.interceptors.request.use((config) => {
  // Read token from localStorage and unquote if it was JSON.stringified
  let token = localStorage.getItem('token');
  try {
    if (token && (token.startsWith('"') || token.startsWith("'"))) {
      token = JSON.parse(token);
    }
  } catch {
    /* ignore parse errors */
  }


  // Resolve the pathname even if config.url is relative
  const base = api.defaults.baseURL || window.location.origin;
  const full = new URL(config.url, base);
  const path = full.pathname;

  // Endpoints that do NOT require auth
  const isPublic =
    path.startsWith('/api/tarot') ||   // public tarot proxy
    path.startsWith('/api/auth') ||    // login/register
    path === '/health';                // health check

  if (!isPublic && typeof token === 'string' && token.length > 0) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization; // be explicit
  }

  return config;
});

// --- Response interceptor: handle auth failures globally ---
let redirecting = false; // prevent redirect loops

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;

    if ((status === 401 || status === 403) && !redirecting) {
      redirecting = true;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      alert('Your session expired. Please log in again.');
      window.location.assign('/login'); // hard redirect resets all state
    }

    return Promise.reject(err);
  }
);

export default api;


