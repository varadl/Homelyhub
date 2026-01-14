import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

import { router as userRouter } from "./routes/userRoutes.js";
import { propertyRouter } from "./routes/propertyRouter.js";
import { bookingRouter } from "./routes/bookingRouter.js";

dotenv.config();

const app = express();

/* ======================
   MIDDLEWARE
====================== */
app.use(cors({
  origin: [
    "http://localhost:5173",        // local frontend
    process.env.ORIGIN_ACCESS_URL   // production frontend (Netlify)
  ],
  credentials: true
}));

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(cookieParser());

/* ======================
   DATABASE
====================== */
connectDB();

/* ======================
   ROUTES
====================== */
app.use("/api/v1/rent/user", userRouter);
app.use("/api/v1/rent/listing", propertyRouter);
app.use("/api/v1/rent/user/booking", bookingRouter);

/* ======================
   SERVER
====================== */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
