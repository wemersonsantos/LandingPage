function registerUsers(){
    let inputName = document.getElementById('inputName');
    let inputSname = document.getElementById('inputSname');
    let inputEmail = document.getElementById('inputEmail');
    let inputPhone = document.getElementById('inputPhone');

    let info = JSON.parse(localStorage.getItem('users'));

    if(info == null){
        localStorage.setItem('users', '[]');
        info = [];
    }

    let infoRegister = {
        name: inputName.value, //Capturando valores
        sname:inputSname.value, //Capturando valores
        email:inputEmail.value, //Capturando valores
        phone: inputPhone.value, //Capturando valores
    }

    info.push(infoRegister);//Adicionando valores no Array

    localStorage.setItem('users', JSON.stringify(info)); //Armazenando informações em formato de JSON

    alert('Registrado com sucesso! Que a força esteja com você')

    inputName.value = '';
    inputSname.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
  
}