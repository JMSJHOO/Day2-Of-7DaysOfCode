
function enviarFormulario(){
    event.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    let edad = document.getElementById('anio').value.trim();
    let lenguaje = document.getElementById('selection').value;
    let errorNombre = document.getElementById('errorNombre');
    let errorEdad = document.getElementById('errorEdad');
    let errorLenguaje = document.getElementById('errorSelection');
    let resultado = document.getElementById('resultado')
    let isValid = true;
    


    if(nombre.length === 0 || nombre === '' || nombre.length < 3){
        errorNombre.textContent ='¡Ingrese un nombre válido! Debe tener mínimo 3 letras.';
        isValid= false;
    }else{
        errorNombre.textContent= '';
    }
    let edadNumero = Number(edad);
    if(isNaN(edadNumero) || edadNumero < 8){
        errorEdad.textContent ='Por favor, ingrese una edad válida.';
        isValid= false;
    }else{
        errorEdad.textContent= '';
    }


    if(lenguaje === ''){  
        errorLenguaje.textContent ='Debe seleccionar un lenguaje';
        isValid= false;
    }else{
        errorLenguaje.textContent= '';
    }
    if(isValid){
    // swal('Formulario enviado correctamente');
            Swal.fire({
                title: "¡Éxito!",
                text: "La operación se completó correctamente.",
                icon: "success"
            }).then((result)=>{
                if (result.isConfirmed){
                    setTimeout(()=>{
                            if(lenguaje ==='Ninguna de la lista'){
                            resultado.textContent=`Bienvenido ${nombre}, tu tienes ${edad} años y hasta el momento no estas estudiando nada de la que aparezca en la lista. Lo siento Mucho.`;
                            resultado.style.color = "red";
                            }else{
                            resultado.textContent=`Bienvenido ${nombre},
                            tu tienes ${edad} años y estas estudiando ${lenguaje}. Felicidades sigue estudiando...`;
                            resultado.style.color = "blue"; // Cambiar color a verde
                            } 
                    },1000);
                }
            });
        } 
    }
