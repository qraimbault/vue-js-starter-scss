/**
 * ROUTER PART
 */
// Used for the routes title
export const SiteName = 'Default Site Name';
export const TitleSeparator = ' - ';

// Vue Router Mode config
export const RouterMode = 'hash';

/**
 * API PART
 */
export const APIConfig = {
  baseURL: '',
  withCredentials: true,
  crossDomain: true,
  contentType: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

/**
 * GOOGLE ANALYTICS PART
 */
export const enableAnalytics = true;
export const analyticsKey = 'UA-XXX-X';
export const disableAnalyticsInDebug = true;
