
async function buscarConselho() {
    const conselhoElement = document.getElementById('conselho');

    conselhoElement.innerText = "Carregando conselho...";

 try {
    const resposta = await fetch('https://api.adviceslip.com/advice');

    const dados = await resposta.json();


    const conselho = dados.slip.advice;

    
      conselhoElement.innerText = `"${conselho}"`;
        
} catch (erro) {
    
        conselhoElement.innerText = "Ocorreu um erro ao buscar o conselho. Tente novamente.";
        console.error('Erro na requisição:', erro);
    }
}

const botaoGerar = document.getElementById('gerar-btn');

botaoGerar.addEventListener('click', buscarConselho);

buscarConselho();