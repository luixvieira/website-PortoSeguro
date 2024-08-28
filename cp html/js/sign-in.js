// Função para validar o formulário
function validateForm() {
    const mechanicEmail = document.getElementById("mechanicEmail").value;
    const mechanicCode = document.getElementById("mechanicCode").value;
    const clientEmail = document.getElementById("clientEmail").value;
    const clientCode = document.getElementById("clientCode").value;

    // Verifica se os campos de Mecânico foram preenchidos
    if (mechanicEmail && mechanicCode) {
        alert("Login bem-sucedido como Mecânico!");
        // Redireciona para a página do Mecânico
        window.location.href = "/cp html/area do mecanico/index.html"; // substitua com a URL correta
        return false; // Impede o envio do formulário padrão
    }

    // Verifica se os campos de Cliente foram preenchidos
    if (clientEmail && clientCode) {
        alert("Login bem-sucedido como Cliente!");
        // Redireciona para a página do Cliente
        window.location.href = "/cp html/area do cliente/index.html"; // substitua com a URL correta
        return false; // Impede o envio do formulário padrão
    }

    // Se nenhum dos campos foi preenchido corretamente, exibe uma mensagem de erro
    alert("Por favor, preencha os campos de Mecânico ou Cliente.");
    return false; // Impede o envio do formulário padrão
}
