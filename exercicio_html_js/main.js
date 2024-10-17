function validarFormulario() {
    const campoA = parseFloat(document.getElementById('numeroA').value);
    const campoB = parseFloat(document.getElementById('numeroB').value);

    if (campoB > campoA){
        alert ("O formulário é valido!");
        return true;
    } else{
        alert("Número B deve ser maior que número A");
        return false;
    }
}