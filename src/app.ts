import express from 'express';
import {freezerItemRouter} from './routes/freezer-item.route';
import {errorHandler} from './middlewares/error-handler.middleware';

const app = express();

app.use(express.json());

// Routes
app.use('/freezer/item', freezerItemRouter);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;