/**
 * The array of routes accessible to public
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * The array of routes used for authentication
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API Authentication routes Routes that starts with this prefix are used for API authentication purposes
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default login path after login
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
