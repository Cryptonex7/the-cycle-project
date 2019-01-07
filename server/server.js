const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.json("Cycle Awayyyy!");
})

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
})