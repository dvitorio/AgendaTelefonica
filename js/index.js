//ABRIR TELA DE NOVO CONTATO
function novoContato(){
     var abrirTelaNovo = document.getElementById("novoContato");
     abrirTelaNovo.style.display = 'block';
     var fecharEditar = document.getElementById("menuEditarContato");
     fecharEditar.style.display = 'none';
     var fecharExcluir = document.getElementById("menuExcluirContato");
     fecharExcluir.style.display = 'none';
     var fecharNovoContato = document.getElementById("menuNovoContato");
     fecharNovoContato.style.display = 'none';
}

//FECHAR TELA DE NOVO CONTATO
function fecharTelaNovo(){
     var telaNovo = document.getElementById("novoContato");
     telaNovo.style.display = 'none';
     var fecharEditar = document.getElementById("menuEditarContato");
     fecharEditar.style.display = 'flex';
     var fecharExcluir = document.getElementById("menuExcluirContato");
     fecharExcluir.style.display = 'flex';
     var fecharNovoContato = document.getElementById("menuNovoContato");
     fecharNovoContato.style.display = 'flex';
}

//ABRIR TELA DE EDITAR CONTATO
function editarContato(){
     var abrirTelaEditar = document.getElementById("editarContato");
     abrirTelaEditar.style.display = 'block';
     var fecharEditar = document.getElementById("menuEditarContato");
     fecharEditar.style.display = 'none';
     var fecharExcluir = document.getElementById("menuExcluirContato");
     fecharExcluir.style.display = 'none';
     var fecharNovoContato = document.getElementById("menuNovoContato");
     fecharNovoContato.style.display = 'none';
}


function fecharAlteracoesContato(){
     var telaAlteracoes = document.getElementById("editarContato");
     telaAlteracoes.style.display = 'none'; 
     var fecharEditar = document.getElementById("menuEditarContato");
     fecharEditar.style.display = 'flex';
     var fecharExcluir = document.getElementById("menuExcluirContato");
     fecharExcluir.style.display = 'flex';
     var fecharNovoContato = document.getElementById("menuNovoContato");
     fecharNovoContato.style.display = 'flex';
}
