require('./index.html');

const Elm = require('./Main.elm');
const moundNode = document.getElementById('main');

const app = Elm.Main.embed(moundNode);
