
    const fechaFiesta = new Date('2025-03-15T15:00:00').getTime();

    function actualizarCuenta() {
        const ahora = new Date().getTime();
        const diferencia = fechaFiesta - ahora;

        if (diferencia <= 0) {
            document.getElementById('contador').innerHTML =("¡Hoy es la fiesta, papá!");
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    const intervalo = setInterval(actualizarCuenta, 1000);

