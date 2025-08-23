const express = require('express');
const mainRouter = require('./routes/index');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});