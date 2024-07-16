// server/api/rateLimiter.js
import rateLimit from "express-rate-limit";
/**
 * Middleware for rate limiting email requests.
 * Limits each IP address to 100 requests per 15 minutes.
 * Sends a "Too many requests from this IP, please try again later." message if the limit is exceeded.
 */
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});

export default emailLimiter;