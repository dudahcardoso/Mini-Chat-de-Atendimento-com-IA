
// Função chamada quando o usuário envia uma pergunta
function responder() {
  // Obtém o campo de input onde o usuário digita a pergunta
  const input = document.getElementById("pergunta");
  // Obtém o elemento onde as mensagens são exibidas
  const mensagens = document.getElementById("mensagens");

  // Pega o texto digitado, removendo espaços extras
  const pergunta = input.value.trim();
  // Se o campo estiver vazio, não faz nada
  if (pergunta === "") return;

  // Adiciona a pergunta do usuário na tela
  mensagens.innerHTML += `<p><b>Você:</b> ${pergunta}</p>`;

  // Resposta padrão caso não entenda a pergunta
  let resposta = "Desculpe, não entendi.";

  // Verifica se a pergunta contém a palavra "horário"
  if (pergunta.toLowerCase().includes("horário")) {
    resposta = "Nosso horário de atendimento é das 8h ás 18h.";
  // Verifica se a pergunta contém a palavra "preço"
  } else if (pergunta.toLowerCase().includes("preço")) {
    resposta =
      "Os preços variam conforme o serviço. Deseja falar com um atendente?";
  // Verifica se a pergunta contém a palavra "curso"
  } else if (pergunta.toLowerCase().includes("curso")) {
    resposta =
      "Temos cursos de HTML, CSS e JavaScript disponíveis!";
  }

  // Adiciona a resposta do assistente virtual na tela
  mensagens.innerHTML += `<p><b>Sebastião: </b> ${resposta}</p>`;
  // Limpa o campo de input
  input.value = "";
  // Faz a rolagem automática para mostrar a última mensagem
  mensagens.scrollTop = mensagens.scrollHeight; // rolagem automática
}

// Obtém o campo de input novamente para adicionar o evento de pressionar tecla
const input = document.getElementById("pergunta");
// Adiciona um ouvinte de evento para detectar quando o usuário pressiona Enter
input.addEventListener("keypress", function(event){
    // Se a tecla pressionada for Enter
    if(event.key === "Enter"){
        responder(); // Chama a função de resposta
        event.preventDefault(); // Evita quebra de linha no input
    }
  });
