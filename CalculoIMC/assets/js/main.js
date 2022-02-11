function main() {

    const form = document.querySelector('.form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log("Evento Previnido");
        const inputAltura = form.querySelector('.altura');
        const inputPeso = form.querySelector('.peso');
        const altura = Number(inputAltura.value);
        const peso = Number(inputPeso.value);

        if (!altura || altura>2.72) {
            setResult('ALTURA INVALIDA', false);
            return;
        }

        if (!peso || peso>635){
            setResult('PESO INVALIDO', false);
            return;
        }

        const imc = calculaIMC(peso, altura);
        if(imc<16 || imc>86){
            setResult('Valores Irreais', false)
            return;
        }
        const classificação = atribuiClassificação(imc);

        const msg = `IMC: ${imc} - ${classificação}`;

        setResult(msg, true);
    });


    function calculaIMC(peso, altura) {
        return (Number(peso) / (Number(altura) ** 2)).toFixed(1);
    }

    function atribuiClassificação(imc) {
        if (imc > 40)
            return "Obesidade Grau III";

        if (imc >= 35)
            return "Obesidade Grau II";

        if (imc >= 30)
            return "Obesidade Grau I";

        if (imc >= 25)
            return "Acima do Peso";

        if (imc >= 18.5)
            return "Normal";

        if (imc >= 17)
            return "Abaixo do Peso";

        if (imc >= 16)
            return "Muito Abaixo do Peso";
    }

    function criaParagrafo() {
        const p = document.createElement('p');
        return p;
    }

    function setResult(msg, isValid) {
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = '';
        const p = criaParagrafo();
        if(isValid){
            p.classList.add('paragrafo-resultado')
        }else{
            p.classList.add('bad');
        }
        p.innerHTML=msg;
        resultado.appendChild(p);
    }

}

main();