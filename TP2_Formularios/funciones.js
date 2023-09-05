function mostrarDatos(){
   
    const apellido = document.getElementById('apellido').value;
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const fecha_nac = document.getElementById('nacimiento').value;
    const domicilio = document.getElementById('domicilio').value;
    const localidad = document.getElementById('localidad').value;
    const checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    const rango = document.querySelectorAll('input[type="range"]');
   
    document.write("Datos recibidos: " +"<br/>")
    document.write("Apellido: " + apellido + "<br/>");
    document.write("Nombre: " + nombre + "<br/>");
    document.write("DNI: " + dni + "<br/>");
    document.write("Fecha de nacimiento: " + fecha_nac + "<br/>");
    document.write("Domicilio: " + domicilio + "<br/>");
    document.write("Localidad: " + localidad + "<br/>");

    document.write("<br/>"+"Idiomas seleccionados: " + "<br/>");
    for (const aux of checkbox) {
       const valor = aux.value;
       const resultado = document.write(valor + "<br />");
    }

    document.write("<br/>"+"Nivel: " + "<br/>");
    for(const ran of rango){
        const valor_rango = ran.value;
        if (valor_rango!=0){
        const resultado_rango = document.write(valor_rango + "<br/>");
        }
    }
};

