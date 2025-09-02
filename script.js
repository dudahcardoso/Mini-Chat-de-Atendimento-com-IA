function responder() {
  const input = document.getElementById("pergunta");
  const mensagens = document.getElementById("mensagens");

  const pergunta = input.value.trim();
  if (pergunta === "") return;

  mensagens.innerHTML += `<p><b>Você:</b> ${pergunta}</p>`;

  let resposta = "Desculpe, não entendi.";

  if (pergunta.toLowerCase().includes("horário")) {
    resposta = "Nosso horário de atendimento é das 8h ás 18h.";
  } else if (pergunta.toLowerCase().includes("preço")) {
    resposta =
      "Os preços variam conforme o serviço. Deseja falar com um atendente?";
  } else if (pergunta.toLowerCase().includes("curso")) {
    resposta =
      "Temos cursos de HTML, CSS e JavaScript disponíveis!";
  }

  mensagens.innerHTML += `<p><b>Sebastião: </b> ${resposta}</p>`;
  input.value = "";
  mensagens.scrollTop = mensagens.scrollHeight;//rolagem automática
}

const input = document.getElementById("pergunta");
input.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        responder();
        event.preventDefault();
    }
  });
