AOS.init();

const dataEvento = new Date("Apr 02, 4200 04:20:00");
const timeSteampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeSteampEvento - timeStampAtual;

    const anosEmMs = 1000 * 60 * 60 * 24 * 365;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 *  60;

    const anosAteEvento = Math.floor(distanciaEvento / anosEmMs);
    const diasAteEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor(distanciaEvento % horaEmMs / minutoEmMs)
    const segundosAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${anosAteEvento}A ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = "Evento expirado";
    }

}, 1000)