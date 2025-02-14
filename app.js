let listadeAmgs = [];

function colocarNome(tag, texto) {
    let campoAdd = document.querySelector(tag);
    campoAdd.innerHTML = texto;
}

function adicionarAmg() {
    let amigo = document.querySelector('input').value.trim();
    
    if (amigo === "" || !/^[A-Za-zÀ-ÿ\s]+$/.test(amigo)) {
        alert('Nome inválido, use somente letras!');
        return;
      } else {
        if (amigo) {listadeAmgs.push(amigo);
            atualizarLista();
      }
      limparCampo();
    }
}

function atualizarLista() {
    let listaNomes =document.getElementById('listaAmigos');
    listaNomes.innerHTML = listadeAmgs.map(amigo => `<li>${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (listadeAmgs.length === 0) {
      alert('A lista está vazia! Adicione alguns nomes primeiro.');
      return;
    }

    let nomeAdicionado = Math.floor(Math.random() * listadeAmgs.length);
    let nomeSorteado = listadeAmgs[nomeAdicionado];
    document.getElementById('resultado').innerText = `Nome sorteado: ${nomeSorteado}`;

    zerarLista()
}

function limparCampo() {
    amgNome = document.querySelector('input');
    amgNome.value = '';
}

function zerarLista() {
    listadeAmgs.length = 0;
    document.getElementById('listaAmigos').innerText = '';
    getElementById('resultado').innerText = '';
  }
  
