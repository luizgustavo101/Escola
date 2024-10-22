const url = "https://rickandmortyapi.com/api";

export function pegarApi(categoria, id) {
  const resposta = fetch(url + categoria + id).then((response) => {
    return response.json().then((resp) => {
      return resp
    });
  });
  return resposta;
}
