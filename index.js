require('dotenv').config();

const express = require('express');
const cors = require('cors');
const storyRoutes = require('./src/routes/storyRoute');
const chapterRoutes = require('./src/routes/chapterRoute');

const app = express();
app.use(cors());
app.use(express.json());

app.use(storyRoutes);
app.use(chapterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
