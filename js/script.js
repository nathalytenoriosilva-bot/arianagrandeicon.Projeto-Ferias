// Aguarda a página carregar tudo
document.addEventListener("DOMContentLoaded", function () {

    // 1. ALERTA DE BOAS-VINDAS
    alert("Bem-vindo à Fanpage da Ariana Grande!");

    // 2. MODO ESCURO
    const btnEscuro = document.getElementById("btn-escuro");
    btnEscuro.addEventListener("click", function () {
        document.body.classList.toggle("modo-escuro");
    });

    // 3. BOTÃO VOLTAR AO TOPO (Aparece ao rolar a página)
    const btnTopo = document.getElementById("btn-topo");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            btnTopo.style.display = "block"; // Mostra o botão
        } else {
            btnTopo.style.display = "none"; // Esconde o botão
        }
    });

    // Faz voltar lá para cima de forma suave ao clicar
    btnTopo.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 4. VALIDAÇÃO DO FORMULÁRIO (Impede de enviar campos vazios)
    const formulario = document.getElementById("meuFormulario");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); 
        
        const nome = document.getElementById("campoNome").value;
        const email = document.getElementById("campoEmail").value;
        const mensagem = document.getElementById("campoMensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos do formulário!");
        } else {
            alert("Mensagem enviada com sucesso!");
            formulario.reset(); // Limpa as caixas de texto
        }
    });

    // 5. EXIBIÇÃO DA DATA ATUAL DINÂMICA NO RODAPÉ
    const textoAno = document.getElementById("texto-ano");
    const hoje = new Date();
    // Formata a data para o padrão do Brasil
    const dataFormatada = hoje.toLocaleDateString("pt-BR");
    textoAno.innerHTML = "Ano: 2026 | Acessado em: " + dataFormatada;

});
