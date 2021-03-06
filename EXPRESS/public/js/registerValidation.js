window.onload = function(){
    
    const form = document.querySelector('#form');    
    form.name.focus();
    //form.name.classList.add('error');

    form.addEventListener("submit", function(e){
        // e.preventDefault();
        
        const esNumero = /^[0-9]+$/;
        const esEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i

        const name = document.querySelector('#name');
        const lastName = document.querySelector('#lastName');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const city = document.querySelector('#city');
        const address = document.querySelector('#address');
        const number = document.querySelector('#number');
        const postalCode = document.querySelector('#postal-code');
        const avatar = document.querySelector('#avatar-load');

        const errorName = document.querySelector('.errorName');
        const errorLName = document.querySelector('.errorLName');
        const errorEmail = document.querySelector('.errorEmail');
        const errorPassword = document.querySelector('.errorPassword');
        const errorCity = document.querySelector('.errorCity');
        const errorAddress = document.querySelector('.errorAddress');
        const errorNumber = document.querySelector('.errorNumber');
        const errorPostalCode = document.querySelector('.errorPostalCode');
        const errorAvatar = document.querySelector('.errorAvatar');
        
        let errores = [];
        
        if(name.value.length < 3){
            errores.push('El nombre debe tener mas de 3 caracteres');
            name.classList.add('error');
            lastName.focus();
            errorName.innerHTML = 'El nombre debe tener mas de 3 caracteres'
        }else{
            name.classList.add('ok');
            name.classList.remove('error');
            errorName.innerHTML = "";
        }
        if(lastName.value == "" || lastName.value < 3){
            errores.push('El apellido debe contener al menos 3 caracters');
            lastName.classList.add('error');
            errorLName.innerHTML = 'El apellido debe contener al menos 3 caracters';
        }else{
            name.classList.add('ok');
            name.classList.remove('error');
            errorLName.innerHTML = "";
        }
        if(email.value.match(esEmail)){
            email.classList.add('ok');
            email.classList.remove('error');
            errorEmail.innerHTML = ""
        }else{
            errores.push('Debes ingresar un tipo de email valido');
            errorEmail.innerHTML = 'Debes ingresar un tipo de email valido';
            email.classList.add('error');
            console.log(errores);
        }
        if(password.value == "" ||password.value.length < 8){
            errores.push('La contrase??a debe tener al menos 8 caracteres');
            password.classList.add('error');
            errorPassword.innerHTML = 'La contrase??a debe tener al menos 8 caracteres';
        }else{
            password.classList.add('ok');
            password.classList.remove('error');
            errorPassword.innerHTML = "";
        }
        if(city.value == "" || city.value.length < 3){
            errores.push('La ciudad debe contener al menos 3 caracteres');
            city.classList.add('error');
            errorCity.innerHTML = 'La ciudad debe contener al menos 3 caracteres';
        }else{
            city.classList.add('ok');
            city.classList.remove('error');
            errorCity.innerHTML = "";
        }
        if(address.value.length < 3 || address.value == ""){
            errores.push('La direccion debe contener al menos 3 caracteres');
            address.classList.add('error');
            errorAddress.innerHTML = 'La direccion debe contener al menos 3 caracteres';
        }else{
            address.classList.add('ok');
            address.classList.remove('error');
            errorAddress.innerHTML = "";
        }
        if(number.value.match(esNumero)){
            number.classList.add('ok');
            number.classList.remove('error');
            errorNumber.innerHTML = "correcto";
        }else{
            errores.push('Debes ingresar un numero');
            errorNumber.innerHTML = 'Debes ingresar un numero';
            number.classList.add('error');
            console.log(errores);
        }

        if(postalCode.value.length < 3 || postalCode.value == ""){
            errores.push('El codigo postal debe contener al menos 3 caracteres');
            postalCode.classList.add('error');
            errorPostalCode.innerHTML = 'El codigo postal debe contener al menos 3 caracteres';
            console.log(errores);
        }else{
            postalCode.classList.add('ok');
            postalCode.classList.remove('error');
            errorPostalCode.innerHTML = "";
        }
        // if(!allowedExtensions.exec(file.value)){
        //     errores.push('ingrese un archivo con extencion valida');
        //     errorFile.innerHTML = 'ingrese un archivo con extencion valida';
        //     errorPostalCode.innerHTML = "formato no valido"
        // }else{
        //     errorFile.innerHTML = "";
        // }
        

        console.log(errores);

        if(errores.length > 0){
            e.preventDefault();
        }


    })
}