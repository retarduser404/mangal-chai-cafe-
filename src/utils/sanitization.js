// Input sanitization utilities for frontend security
// Prevents XSS and injection attacks

/**
 * Sanitizes text input by removing potentially dangerous characters
 * @param {string} input - The input string to sanitize
 * @returns {string} - Sanitized string
 */
export const sanitizeText = (input) => {
  if (typeof input !== 'string') return '';

  return input
    .replace(/[<>'"&]/g, '') // Remove HTML characters
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Length limit
};

/**
 * Validates and sanitizes URL inputs
 * @param {string} url - The URL to validate
 * @returns {string|null} - Valid URL or null
 */
export const sanitizeUrl = (url) => {
  if (typeof url !== 'string') return null;

  try {
    const parsedUrl = new URL(url);

    // Only allow http/https protocols
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return null;
    }

    // Prevent localhost/private IPs in production
    if (process.env.NODE_ENV === 'production') {
      const hostname = parsedUrl.hostname;
      if (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname.startsWith('192.168.') ||
        hostname.startsWith('10.') ||
        hostname.startsWith('172.')
      ) {
        return null;
      }
    }

    return parsedUrl.toString();
  } catch {
    return null;
  }
};

/**
 * Sanitizes HTML content (if needed in future)
 * Note: This app currently has no dynamic HTML rendering
 * @param {string} html - HTML string to sanitize
 * @returns {string} - Sanitized HTML
 */
export const sanitizeHtml = (html) => {
  // For now, return empty string as no HTML rendering exists
  // If HTML rendering is added later, implement DOMPurify here
  console.warn('HTML sanitization called but no HTML rendering should exist in this app');
  return '';
};

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validates phone number format (Indian numbers)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};
