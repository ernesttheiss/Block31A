const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
