function calcularTempo() {
    const dataSelecionada = localStorage.getItem("dataSelecionada");
    const fotoSelecionada = localStorage.getItem("fotoSelecionada");

    if (!dataSelecionada) {
        document.getElementById("contador").innerHTML = "Nenhuma data foi selecionada!";
        return;
    }

    const dataInicial = new Date(dataSelecionada);

    setInterval(() => {
        const agora = new Date();
        const diferenca = agora - dataInicial;

        if (diferenca < 0) {
            document.getElementById("contador").innerHTML = "A data escolhida ainda não chegou!";
            return;
        }

        const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
        const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        document.getElementById("contador").innerHTML = `
            <p><strong>${anos} anos, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos</strong></p>
        `;
    }, 1000);

    if (fotoSelecionada) {
        document.getElementById("fotoExibida").innerHTML = `<img src="${fotoSelecionada}" class="foto">`;
    }
}

function voltar() {
    window.location.href = "index.html";
}

calcularTempo();
