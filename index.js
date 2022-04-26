const express = require("express");
const req = require("express/lib/request");
const app = express();
const path = require("path");

//configurações
app.set("view engine", "ejs");
const port = 3000 || "https://damp-journey-67364.herokuapp.com/";
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

//Array lista de objetos contendo dados dos pokemons
let pokesquantid = 7
const pokedex = [
  {
    id: 1,
    nome: "Scorbunny",
    descricao: "Um aquecimento de corrida faz com que a energia do fogo percorra o corpo deste Pokémon. Quando isso acontecer, ele estará pronto para lutar com força total.",
    tipo: "Fogo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/813.png",
  },

  {
    id: 2,
    nome: "Grookey",
    descricao: "Quando ele usa seu bastão especial para iniciar uma batida, as ondas sonoras produzidas carregam energia revitalizante para as plantas e flores da região.",
    tipo: "Grama",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/810.png",
  },

  {
    id: 3,
    nome: "Sobble",
    descricao: "Quando assustado, este Pokémon chora. Suas lágrimas têm o poder químico de 100 cebolas, e os atacantes não serão capazes de resistir ao choro.",
    tipo: "Água",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png",
  },

  {
    id: 4,
    nome: "Corviknight",
    descricao: "Este Pokémon reina supremo nos céus da região de Galar. O brilho negro de seu corpo de aço poderia levar o terror ao coração de qualquer inimigo.",
    tipo: "Sombrio/Metal",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/823.png",
  },

  {
    id: 5,
    nome: "Vulpix Alola",
    descricao: "Depois de longos anos nas montanhas sempre cobertas de neve de Alola, este Vulpix ganhou poder sobre o gelo.",
    tipo: "Gelo",
    imagem:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037_f2.png",
  },

  {
    id: 6,
    nome: "Umbreon",
    descricao: "Quando este Pokémon fica com raiva, seus poros secretam um suor venenoso, que pulveriza nos olhos de seu oponente.",
    tipo: "Sombrio",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
  },

  {
    id: 7,
    nome: "Sprigatito",
    descricao: "Sprigatito é um Pokémon Gato de Grama caprichoso e que busca atenção.",
    tipo: "Grama",
    imagem: "/images/Sprigatito2.png",
  },
];

//ROTAS
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  let pokemon = req.body;
  console.log(pokemon);
  pokemon.id = pokesquantid + 1;
  pokesquantid++;
  pokedex.push(pokemon);
  console.log(pokemon.id);
  res.redirect("/");
});

app.post("/update", (req, res) => {
  let pokemon = req.body;
  pokedex[pokemon.id - 1] = pokemon;
  res.redirect(`detalhes/${req.body.id}`);
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  console.log(+req.params.id);
  let pokemon = pokedex.find((pokemon) => pokemon.id == id);
  console.log(pokemon);
  res.render("detalhes", { pokemon });
});

app.get("/cadastrar", (req, res) => {
  res.render("cadastrar");
});

app.get("/deletar/:id", (req, res) => {
  console.log(+req.params.idq);

  const id = +req.params.id;
  console.log(id + " delete");
  const indice = pokedex.findIndex((pokemon) => pokemon.id == id);
  pokedex.splice(indice, 1);
  res.redirect("/");
});


app.get("/home", (req, res) => {
  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);

