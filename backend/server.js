const express = require('express');
const dotenv = require('dotenv')
dotenv.config({ path: `${__dirname}/.env` });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4000

// app.use('/api/gallery', displayGallery);

// app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
