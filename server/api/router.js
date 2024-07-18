// server/api/router.js
import { Router } from "express";

import { sendEmail } from "./emailHandler.js";
import emailLimiter from "./rateLimiter.js";

/**
 * Initializes the Express router for defining API routes.
*/
const router = Router();

// Message to check if the server is working as expected.
router.get("/api", (req, res) => {
  res.send("Backend server is running✅");
});

// POST endpoint to send emails.
router.post("/send-email", emailLimiter, sendEmail);

export default router;