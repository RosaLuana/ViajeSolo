document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario() {
  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("whatsapp").value != "") {
    alert("Ótimo! Vamos entrar em contato com você")
  } else {
    alert("Preencha corretamente todos os campos.")
  }
}