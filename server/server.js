var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

// Middlewares
app.use(bodyParser.json());
//app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, DELETE");
    next();
});

//books
var books =
    [
        {
            id: 1,
            avaliable: true,
            nbRent: 100,
            author: "Chinua Achebe",
            country: "Nigeria",
            imageLink: "images/things-fall-apart.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            pages: 209,
            title: "Things Fall Apart",
            year: 1958
        },
        {
            id: 2,
            avaliable: true,
            nbRent: 100,
            author: "Hans Christian Andersen",
            country: "Denmark",
            imageLink: "images/fairy-tales.jpg",
            language: "Danish",
            link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            pages: 784,
            title: "Fairy tales",
            year: 1836
        },
        {
            id: 3,
            avaliable: true,
            nbRent: 100,
            author: "Dante Alighieri",
            country: "Italy",
            imageLink: "images/the-divine-comedy.jpg",
            language: "Italian",
            link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
            pages: 928,
            title: "The Divine Comedy",
            year: 1315
        },
        {
            id: 4,
            avaliable: true,
            nbRent: 100,
            author: "Unknown",
            country: "Sumer and Akkadian Empire",
            imageLink: "images/the-epic-of-gilgamesh.jpg",
            language: "Akkadian",
            link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
            pages: 160,
            title: "The Epic Of Gilgamesh",
            year: -1700
        },
        {
            id: 5,
            avaliable: true,
            nbRent: 100,
            author: "Unknown",
            country: "Achaemenid Empire",
            imageLink: "images/the-book-of-job.jpg",
            language: "Hebrew",
            link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
            pages: 176,
            title: "The Book Of Job",
            year: -600
        },
        {
            id: 6,
            avaliable: true,
            nbRent: 100,
            author: "Unknown",
            country: "India/Iran/Iraq/Egypt/Tajikistan",
            imageLink: "images/one-thousand-and-one-nights.jpg",
            language: "Arabic",
            link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
            pages: 288,
            title: "One Thousand and One Nights",
            year: 1200
        },
        {
            id : 7,
            avaliable: true,
            nbRent: 100,
            author: "Unknown",
            country: "Iceland",
            imageLink: "images/njals-saga.jpg",
            language: "Old Norse",
            link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
            pages: 384,
            title: "Nj\u00e1l's Saga",
            year: 1350
        },
        {
            id : 8,
            avaliable: true,
            nbRent: 100,
            author: "Jane Austen",
            country: "United Kingdom",
            imageLink: "images/pride-and-prejudice.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
            pages: 226,
            title: "Pride and Prejudice",
            year: 1813
        },
        {
            id : 9,
            avaliable: true,
            nbRent: 100,
            author: "Honor\u00e9 de Balzac",
            country: "France",
            imageLink: "images/le-pere-goriot.jpg",
            language: "French",
            link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
            pages: 443,
            title: "Le P\u00e8re Goriot",
            year: 1835
        },
        {
            id : 10,
            avaliable: true,
            nbRent: 100,
            author: "Samuel Beckett",
            country: "Republic of Ireland",
            imageLink: "images/molloy-malone-dies-the-unnamable.jpg",
            language: "French, English",
            link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
            pages: 256,
            title: "Molloy, Malone Dies, The Unnamable, the trilogy",
            year: 1952
        },
        {
            id : 11,
            avaliable: true,
            nbRent: 100,
            author: "Giovanni Boccaccio",
            country: "Italy",
            imageLink: "images/the-decameron.jpg",
            language: "Italian",
            link: "https://en.wikipedia.org/wiki/The_Decameron\n",
            pages: 1024,
            title: "The Decameron",
            year: 1351
        },
        {
            id : 12,
            avaliable: true,
            nbRent: 100,
            author: "Jorge Luis Borges",
            country: "Argentina",
            imageLink: "images/ficciones.jpg",
            language: "Spanish",
            link: "https://en.wikipedia.org/wiki/Ficciones\n",
            pages: 224,
            title: "Ficciones",
            year: 1965
        },
        {
            id : 14,
            avaliable: true,
            nbRent: 100,
            author: "Emily Bront\u00eb",
            country: "United Kingdom",
            imageLink: "images/wuthering-heights.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
            pages: 342,
            title: "Wuthering Heights",
            year: 1847
        },
        {
            id : 15,
            avaliable: true,
            nbRent: 100,
            author: "Albert Camus",
            country: "Algeria, French Empire",
            imageLink: "images/l-etranger.jpg",
            language: "French",
            link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
            pages: 185,
            title: "The Stranger",
            year: 1942
        },
        {
            id : 16,
            avaliable: true,
            nbRent: 100,
            author: "Paul Celan",
            country: "Romania, France",
            imageLink: "images/poems-paul-celan.jpg",
            language: "German",
            link: "\n",
            pages: 320,
            title: "Poems",
            year: 1952
        },
        {
            id : 17,
            avaliable: true,
            nbRent: 100,
            author: "Louis-Ferdinand C\u00e9line",
            country: "France",
            imageLink: "images/voyage-au-bout-de-la-nuit.jpg",
            language: "French",
            link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
            pages: 505,
            title: "Journey to the End of the Night",
            year: 1932
        },
        {
            id : 18,
            avaliable: true,
            nbRent: 100,
            author: "Miguel de Cervantes",
            country: "Spain",
            imageLink: "images/don-quijote-de-la-mancha.jpg",
            language: "Spanish",
            link: "https://en.wikipedia.org/wiki/Don_Quixote\n",
            pages: 1056,
            title: "Don Quijote De La Mancha",
            year: 1610
        },
        {
            id : 19,
            avaliable: true,
            nbRent: 100,
            author: "Geoffrey Chaucer",
            country: "England",
            imageLink: "images/the-canterbury-tales.jpg",
            language: "English",
            link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
            pages: 544,
            title: "The Canterbury Tales",
            year: 1450
        },
        {
            id : 20,
            avaliable: true,
            nbRent: 100,
            author: "Anton Chekhov",
            country: "Russia",
            imageLink: "images/stories-of-anton-chekhov.jpg",
            language: "Russian",
            link: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
            pages: 194,
            title: "Stories",
            year: 1886
        }];





// Routes
app.get('/books', (req, res) => res.json(books));
app.get('/books/:id', (req, res) => {
    let id = req.params.id;
    for (let i=0; i<books.length; i++) {
        console.log(books[i])
        if (books[i].id == id) {
            console.log('Book ' + id + ' as been return')
            return res.json(books[i])
        }
    }
    res.status(404).send('Etudiant inconnu');
});
app.put('/books/update/:id', (req, res) => {
    // mise à jour du livre ciblé
    if (req.body.id) {
        for(let i=0; i<books.length; i++) {
            if (books[i].id == req.body.id) {
                books[i] = req.body; // mise à jour
                break; // on sort de la boucle
            }
        }
        return res.json('mise à jour réussie');
    }
    res.status(500).send('Erreur'); // envoie du code erreur au client
})
app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
