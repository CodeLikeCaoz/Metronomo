var stringSeg = "00";
var stringMin = "00";
var stringHour = "00";

//define o valor do elemento do cronometro assim que o site eh carregado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("cronometro").textContent = stringHour + ":" + stringMin + ":" + stringSeg;

    //define uma constante para os botoes de limpar e parar o cronometro
    const bntParar = document.getElementById("stop");
    const bntLimpar = document.getElementById("limpar");

    //Comecar o cronometro
    const bntComecar = document.getElementById("comecar");
    bntComecar.addEventListener('click', () => {
        

        const tempo = setInterval(() => {
        var seg = parseInt(stringSeg);
        var min = parseInt(stringMin);
        var hour = parseInt(stringHour);

        //checa se deve ja se passou uma hora ou um minuto
            if(seg >= 59) {
                min += 1;
                seg = 0;
            }
            if(min >= 59) {
                hour += 1;
                min = 0;
                seg = 0;
            }
            seg += 1;

            //checa para ver se eh necessario adicionar um zero a esquerda
            if(seg < 10) {stringSeg = seg.toString().padStart(2, '0')}
            else {stringSeg = seg.toString()}
            if(min < 10) {stringMin = min.toString().padStart(2, '0')}
            else {stringMin = min.toString()}
            if(hour < 10) {stringHour = hour.toString().padStart(2, '0')}
            else {stringHour - hour.toString()}
            document.getElementById("cronometro").textContent = stringHour + ":" + stringMin + ":" + stringSeg;
            
            }, 1000);

        //Parar o cronometro
        bntParar.addEventListener('click', () => {
            clearInterval(tempo);
        });

        //Limpar o cronometro
        bntLimpar.addEventListener('click', () => {
            seg = 0;
            min = 0;
            hour = 0;

            stringSeg = "00";
            stringMin = "00";
            stringHour = "00";
            document.getElementById("cronometro").textContent = stringHour + ":" + stringMin + ":" + stringSeg;
        })
    })

});