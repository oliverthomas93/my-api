import express from 'express';
//Hello
let app = express();
let PORT = 4000;

app.get('/', (req,res) => {
    res.send(`Node and Express server running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`)
});

