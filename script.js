const inputQuestion = document.getElementById("input-question");
const submitButton = document.getElementById("submit-button");
const chatgptResponse = document.getElementById("chatgpt-response");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();

    const question = inputQuestion.value;
    inputQuestion.value = "";

    // Enviar a pergunta para o endpoint de API do ChatGPT
    // e exibir a resposta na página
    fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            prompt: question,
            temperature: 0.5,
            max_tokens: 150 // aumentando o tamanho da resposta
        })
    })
    .then(response => response.json())
    .then(data => {
        const answer = data.choices[0].text;
        chatgptResponse.innerHTML = answer;
    })
    .catch(error => {
        console.error(error);
    });
});