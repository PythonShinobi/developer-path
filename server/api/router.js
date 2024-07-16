// server/api/router.js
import { Router } from "express";

import { sendEmail } from "./emailHandler.js";
import emailLimiter from "./rateLimiter.js";

/**
 * Initializes the Express router for defining API routes.
*/
const router = Router();

// POST endpoint to send emails.
router.post("/send-email", emailLimiter, sendEmail);

export default router;