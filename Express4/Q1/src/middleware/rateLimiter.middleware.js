const requestCounts = {};
const WINDOW_SIZE = 60 * 1000; 
const MAX_REQUESTS = 15;

const rateLimiterMiddleware = (req, res, next) => {
  const now = Date.now();
  const ip = req.ip;

  if (!requestCounts[ip]) {
    requestCounts[ip] = [];
  }

  requestCounts[ip] = requestCounts[ip].filter(
    timestamp => now - timestamp < WINDOW_SIZE
  );

  if (requestCounts[ip].length >= MAX_REQUESTS) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestCounts[ip].push(now);
  next();
};

export default rateLimiterMiddleware;
