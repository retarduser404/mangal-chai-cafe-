# Security Hardening - Mangal Chai Website

This document outlines the security measures implemented to protect the Mangal Chai website against common frontend vulnerabilities.

## 🔒 Implemented Security Measures

### 1. Content Security Policy (CSP)
- **Location**: `index.html`
- **Purpose**: Prevents XSS attacks by restricting resource loading
- **Policy**:
  - `default-src 'self'` - Only allow resources from same origin
  - `script-src` - Allow Google Maps scripts
  - `style-src` - Allow Google Fonts
  - `frame-src` - Restrict iframe sources to Google Maps
  - `object-src 'none'` - Block all object/embed/applet elements
  - `form-action 'none'` - Block all form submissions
  - `upgrade-insecure-requests` - Force HTTPS

### 2. Input Sanitization Utilities
- **Location**: `src/utils/sanitization.js`
- **Functions**:
  - `sanitizeText()` - Removes HTML characters and dangerous protocols
  - `sanitizeUrl()` - Validates URLs and prevents localhost/private IP access
  - `sanitizeHtml()` - Placeholder for future HTML sanitization (currently unused)
  - `isValidEmail()` - Email format validation
  - `isValidPhone()` - Phone number validation

### 3. Build Security Configuration
- **Location**: `vite.config.js`
- **Features**:
  - Console log removal in production builds
  - Source map removal for production
  - Environment variable prefixing (`VITE_` only)
  - Host header attack prevention

### 4. HTTP Security Headers
- **Location**: `public/.htaccess`
- **Headers**:
  - `X-Content-Type-Options: nosniff` - Prevent MIME sniffing
  - `X-Frame-Options: DENY` - Prevent clickjacking
  - `Referrer-Policy: strict-origin-when-cross-origin` - Control referrer data
  - `Permissions-Policy` - Restrict browser features (camera, microphone, etc.)

### 5. CSS Security
- **Location**: `tailwind.config.js`
- **Features**:
  - Blocklist dangerous CSS classes (eval, javascript, etc.)
  - Restrict dynamic class generation

### 6. Dependency Security
- **Scripts**: Added `npm audit` and `npm audit:fix` commands
- **Recommendation**: Run `npm audit` regularly to check for vulnerabilities

## 🛡️ Security Audit Results

### Vulnerabilities Found & Fixed

#### 1. XSS Prevention
- **Risk**: No user input rendering found (static content only)
- **Fix**: Implemented CSP and sanitization utilities for future-proofing
- **Impact**: Prevents script injection attacks

#### 2. Supply Chain Security
- **Risk**: Dependencies could have vulnerabilities
- **Fix**: Added audit scripts, version pinning recommended
- **Impact**: Early detection of dependency vulnerabilities

#### 3. Information Disclosure
- **Risk**: Console logs and source maps in production
- **Fix**: Automatic removal during build process
- **Impact**: Prevents debugging information leakage

#### 4. Clickjacking Protection
- **Risk**: Site could be embedded in malicious frames
- **Fix**: X-Frame-Options header
- **Impact**: Prevents UI redress attacks

#### 5. MIME Sniffing Prevention
- **Risk**: Browser could misinterpret content types
- **Fix**: X-Content-Type-Options header
- **Impact**: Prevents content type confusion attacks

## 🚨 Security Monitoring

### Regular Checks Required
1. **Dependency Audit**: Run `npm audit` weekly
2. **CSP Violations**: Monitor browser console for CSP reports
3. **Security Headers**: Use tools like securityheaders.com
4. **Build Output**: Verify console logs are removed in production

### Deployment Security
- Ensure HTTPS is enabled (CSP upgrade-insecure-requests)
- Consider enabling HSTS header after HTTPS verification
- Use securityheaders.com to test headers
- Implement proper backup and update procedures

## 📋 Security Checklist

### Pre-Deployment
- [ ] Run `npm audit` - no high/critical vulnerabilities
- [ ] Test CSP in browser developer tools
- [ ] Verify security headers with online tools
- [ ] Confirm HTTPS certificate validity
- [ ] Test all external links (Google Maps, social media)

### Post-Deployment
- [ ] Monitor CSP violation reports
- [ ] Regular dependency updates
- [ ] Security header validation
- [ ] Backup security verification

## 🔧 Maintenance

### Updating Security Measures
1. Review CSP policy when adding new external resources
2. Update dependency audit scripts as needed
3. Monitor browser compatibility with security headers
4. Test security changes in staging environment first

### Emergency Response
- If XSS vulnerability discovered: Update CSP immediately
- If dependency vulnerability: Run `npm audit fix`
- If header misconfiguration: Update .htaccess and redeploy

## 📚 Resources

- [OWASP Frontend Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Frontend_Security_Cheat_Sheet.html)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [MDN Security Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [Security Headers Testing](https://securityheaders.com/)

---

**Last Security Review**: December 2025
**Next Review Due**: January 2026
