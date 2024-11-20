const formulario = document.getElementById('formulario');
const validarNombre = () =>{
    const expRegularNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    const inpuNombre = formulario['nombre-receptor'];

    if(expRegularNombre.test(inpuNombre.value)){
        inpuNombre.classList.remove('formulario__input--error');
        return true;
    } else {
    inpuNombre.classList.add('formulario__input--error');
    return false;
}
};


export default validarNombre;