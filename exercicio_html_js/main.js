function validarFormulario( {
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if: campoB > campoA {
        return true;
        alert(" o formulário é válido")
    } else {
        alert("Número B deve ser maior que número A!");
        return false;
    }
})