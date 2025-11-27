import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

// tempat simpan file upload
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No video uploaded" });
  }

  // lokasi file sementara
  const filePath = req.file.path;

  res.json({
    message: "Video uploaded successfully",
    file: req.file
  });
});

// route test
app.get("/", (req, res) => {
  res.send("AI Content Factory MVP backend is running.");
});

// run server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

