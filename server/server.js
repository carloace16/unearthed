import express from "express";
import giftsRouter from "./routes/gifts.js";
import "./config/dotenv.js";
import cors from "cors";

const app = express();
app.use(cors());

// Middleware to serve static files

app.use("/gifts", giftsRouter);

// Route for the root URL
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
    );
});

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
