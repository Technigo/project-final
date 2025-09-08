// frontend/src/ui/components.js
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Page = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: clamp(16px, 3vw, 32px);
`;

export const Card = styled.section`
  background:${({ theme }) => theme.colors.bg};
  border:1px solid ${({ theme }) => theme.colors.border};
  border-radius:${({ theme }) => theme.radii.lg};
  box-shadow:${({ theme }) => theme.shadow.sm};
  padding: clamp(16px, 3vw, 28px);
`;

export const H1 = styled.h1`margin: 0 0 12px; font-weight: 700;`;
export const H2 = styled.h2`margin: 0 0 8px; font-weight: 700; font-size:1.25rem;`;
export const Hint = styled.p`margin: 8px 0 16px; color:${({ theme }) => theme.colors.muted};`;

export const Field = styled.div`margin: 12px 0;`;
export const Label = styled.label`display:block; margin: 0 0 6px; font-weight:600;`;
export const Input = styled.input`
  width:100%; padding:12px 14px; border-radius:${({ theme }) => theme.radii.md};
  border:1px solid ${({ theme }) => theme.colors.border}; background:#fff;
  &:focus{ border-color:${({ theme }) => theme.colors.focus}; box-shadow:0 0 0 4px rgba(37,99,235,.15); }
  &[aria-invalid="true"]{ border-color:${({ theme }) => theme.colors.danger}; }
`;

export const ErrorText = styled.p`
  margin:6px 0 0; color:${({ theme }) => theme.colors.danger}; font-size:0.925rem;
`;

export const Button = styled.button`
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:12px 16px; border:0; border-radius:${({ theme }) => theme.radii.md};
  color:${({ theme }) => theme.colors.primaryText}; background:${({ theme }) => theme.colors.primary};
  cursor:pointer; font-weight:600; box-shadow:${({ theme }) => theme.shadow.sm};
  &:hover{ background:${({ theme }) => theme.colors.primaryHover}; }
  &:disabled{ opacity:.6; cursor:not-allowed; }
`;

/* Theme toggle button styled for the dark nav */
export const GhostButton = styled.button`
  background: transparent;
  color: #f2f4f5;
  border: 1px solid rgba(255,255,255,.25);
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover,
  &:focus-visible {
    border-color: rgba(255,255,255,.45);
    transform: translateY(-1px);
    outline: none;
  }

  &:active { transform: translateY(0); }
`;

/* === NAVBAR (2-row on mobile: brand + mode, then links) === */
const BRAND = '#8a63d2';                      // lighter purple you liked
const BRAND_BG = 'rgba(138, 99, 210, 0.18)';  // soft pill hover bg

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;

  background: var(--nav-bg); /* from :root in index.css */
  color: #f2f4f5;
  border-bottom: 1px solid rgba(255,255,255,.08);

  padding: 12px 16px;
  margin: 0;

  /* Mobile: stack into two rows */
  .row-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .row-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 14px;
    margin-top: 8px;
  }

  /* Desktop: brand left, links + toggle right (single bar feel) */
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;

    .row-top {
      justify-content: flex-start;
      gap: 16px;
    }

    .row-links {
      justify-content: flex-end;
      margin-top: 0;
    }
  }
`;

/* Keep NavGroup for compatibility (optional to use) */
export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

/* Brand text (no card image) */
export const Brand = styled(RouterLink)`
  font-weight: 800;
  letter-spacing: 0.2px;
  text-decoration: none;
  color: ${BRAND};
  font-size: 18px;
  line-height: 1;
  padding: 6px 8px;
  border-radius: 10px;
  transition: background 120ms ease, color 120ms ease;

  &:hover,
  &:focus-visible {
    background: ${BRAND_BG};
    color: ${BRAND};
    outline: none;
  }
`;

/* Links with clear purple hover/active states */
export const NavLink = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 10px;
  transition: background 120ms ease, color 120ms ease;

  &:hover,
  &:focus-visible {
    background: ${BRAND_BG};
    color: ${BRAND};
    outline: none;
  }

  &.active {
    background: ${BRAND_BG};
    color: ${BRAND};
  }
`;

export const Grid = styled.div`
  display:grid; gap:16px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 16px 0;
`;
