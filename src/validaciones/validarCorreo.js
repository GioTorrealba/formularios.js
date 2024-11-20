const formulario = document.getElementById('formulario');
const validarCorreo = () =>{
    const expRegularCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    const inpuCorreo = formulario['correo-receptor'];

    if(expRegularCorreo.test(inpuCorreo.value)){
        inpuCorreo.classList.remove('formulario__input--error');
        return true;
    } else {
    inpuCorreo.classList.add('formulario__input--error');
    return false;
}
};


export default validarCorreo;