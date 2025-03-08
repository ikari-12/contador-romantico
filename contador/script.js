let dataInicial;
let imagemExibida = false;

function iniciarContador() {
    const dataInput = document.getElementById("dataInput").value;
    const fotoInput = document.getElementById("fotoInput").files[0];

    // Verifica se a data inserida é válida
    if (isNaN(new Date(dataInput))) {
        alert("Por favor, insira uma data válida no formato YYYY-MM-DD HH:MM:SS.");
        return;
    }

    // Verifica se a foto foi selecionada
    if (!fotoInput) {
        alert("Por favor, insira uma foto.");
        return;
    }

    // Define a data inicial
    dataInicial = new Date(dataInput);

    // Exibe a foto
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.alt = "Imagem do Usuário";
        document.getElementById("fotoExibida").innerHTML = ""; // Limpa qualquer imagem anterior
        document.getElementById("fotoExibida").appendChild(img);
    };
    reader.readAsDataURL(fotoInput);

    // Inicia o contador
    setInterval(atualizarContador, 1000);
}

function atualizarContador() {
    if (!dataInicial) return;

    const agora = new Date();
    const tempoDecorrido = agora - dataInicial;

    // Calcula a diferença em anos, dias, horas, minutos e segundos
    const anos = Math.floor(tempoDecorrido / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor((tempoDecorrido % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoDecorrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoDecorrido % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoDecorrido % (1000 * 60)) / 1000);

    // Exibe o contador no HTML
    document.getElementById("contador").innerHTML = `${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
