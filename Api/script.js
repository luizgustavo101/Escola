import { pegarApi } from "./requisição.js";
import { pegarCategoria, pegarAtributo } from "./pegarCategoria.js";
import { pegarId } from "./pegarId.js";

let variaveis = {
  img: document.getElementById("tag"),
  botao: document.getElementById("botao"),
  saida: document.getElementById("conteudo"),
  nome: document.getElementsByClassName("nome")[0],
  categoria: null,
  id: null,
  fetch: null,
};

function auxiliar(_nome, _foto) {
  variaveis.categoria = pegarCategoria();
  variaveis.id = pegarId();
  variaveis.fetch = pegarApi(variaveis.categoria, variaveis.id);

  return variaveis.fetch.then((repi) => {
    
    variaveis.img.setAttribute(
      "src",
      repi[_foto]
    );
    variaveis.nome.innerHTML = repi[_nome];
  });
}

variaveis.botao.addEventListener("click", (event) => {
  event.preventDefault();
  auxiliar(pegarAtributo(), "image");
});
