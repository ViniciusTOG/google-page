
function pesquisaEndereco() {
	var endereco = document.getElementById("myInput").value;
	var url ="https://www.google.com/search?q=" + endereco;
	window.location = url;
}

