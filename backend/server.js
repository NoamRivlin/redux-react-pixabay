import { express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/api/', displayImages);



// app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
