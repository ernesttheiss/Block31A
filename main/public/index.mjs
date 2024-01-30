import express from 'express'; 
import pets from './data.js';


const app = express();
const PORT = 8080;

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// GET all pets
app.get('/api/v1/pets', (req, res) => {
    res.json(pets);
});

// GET pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    const name = req.params.name;
    const pet = pets.find(pet => pet.name === name);
    res.json(pet);
});

// GET pet by owner's name using query string
app.get('/api/v1/pets/owner', (req, res) => {
    const owner = req.query.owner;
    const pet = pets.find(pet => pet.owner === owner);
    res.json(pet);
});

// Serve client homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Adjust the path as needed
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

export default app;
