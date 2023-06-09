const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const path = require('path');
const { errorHandler } = require('./middleware/errMiddleware');
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// my backend port is 5000 or 4000 and my frontend port is 3000
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
}));
const PORT = process.env.BACKEND_PORT || 4000

app.use('/api/gallery', require('./routes/galleryRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
