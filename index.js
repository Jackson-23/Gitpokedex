const express = require("express");
const req = require("express/lib/request");
const app = express();
const path = require("path");

//configurações
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())

//Array lista de objetos contendo dados dos pokemons
const pokedex = [
    {
        id: 1,
        nome: "Scorbunny",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/813.png"
    },

    {
        id: 2,
        nome: "Grookey",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/810.png"
    },

    {
        id: 3,
        nome: "Sobble",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png"
    },

    {
        id: 4,
        nome: "Corviknight",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/823.png"
    },

    {
        id: 5,
        nome: "Vulpix Alola",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037_f2.png"
    },

    {
        id: 6,
        nome: "Umbreon",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
    },
    
    {
        id: 7,
        nome: "Sprigatito",
        descricao: "infos",
        tipo: "Elemento",
        imagem: "/images/Sprigatito2.png"
    }



    
]




//ROTAS
app.get("/", (req, res) => {
    res.render("index", {pokedex});
    console.log(pokedex);
});

app.post("/add", (req, res) => {
    let pokemon = req.body;
    console.log(pokemon);
    pokemon.id = pokedex.length+1;
    pokedex.push(pokemon);
    console.log(pokemon.id);
    res.redirect("/");
});

app.post("/update", (req, res)=>{
    let pokemon = req.body;
    console.log(pokemon);
    //console.log("update"+pokemon.id);
    pokedex[pokemon.id-1] = pokemon;
    //const pokemon = pokedex.find(pokemon => pokemon.id === id);
    res.render("detalhes", {pokemon});
});

app.get("/detalhes/:id", (req, res) => {
    const id = +req.params.id;
    console.log(+req.params.id);
    let pokemon = pokedex.find(pokemon => pokemon.id == id);
    console.log(pokemon);
    res.render("detalhes", {pokemon});
})
/*'https://assets.pokemon.com/assets/cms2/img/pokedex/full/823.png'*/

app.post("/home", (req, res) => {
    res.send("");
});

app.listen(3000, ()=>
    console.log("Servidor rodando em http://localhost:3000")
);