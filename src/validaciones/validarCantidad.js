const formulario = document.getElementById('formulario');
const validarCantidad = () =>{
    const expRegular = /^\d+(\.\d+)?$/;

    const inpuCantidad = formulario.cantidad;

    if(expRegular.test(inpuCantidad.value)){
        inpuCantidad.classList.remove('formulario__input--error');
        return true;
    } else {
    inpuCantidad.classList.add('formulario__input--error');
    return false;
}
};


export default validarCantidad;