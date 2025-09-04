const express = require("express");
const adminRoutes = require("./routes/adminRoutes");
const readerRoutes = require("./routes/readerRoutes");
const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/admin", adminRoutes);
app.use("/reader", readerRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(PORT, () => {
  console.log(`✅ Book Management System running at http://localhost:${PORT}`);
});
