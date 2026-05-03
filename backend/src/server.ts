// backend/src/server.ts
import "dotenv/config";
import app from "./index.js";

const REQUIRED_ENV = ["MONGODB_URI", "JWT_SECRET"] as const;
const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`[startup] Missing required env vars: ${missing.join(", ")}`);
  process.exit(1);
}

const port = Number(process.env.PORT) || 3000;

app.use((req, _res, next) => {
  console.log(`[req] ${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
  const allowed = (process.env.CORS_ORIGIN || process.env.ALLOWED_ORIGIN || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  console.log(
    allowed.length
      ? `CORS allowed origins: ${allowed.join(", ")}`
      : "CORS: no origins configured → permissive (dev)"
  );
});
