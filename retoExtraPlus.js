class Cliente{
    // Se asume que cada cliente nuevo abre su cuenta con $10 MXN
    // ya que $10 es el saldo mínimo que debe mantener.
    money = 10;
    constructor(userName, password){
        this.name = userName;
        this.pass = password;
    }

    //Una cuenta no debe de tener más de $990 y menos de $10
    IngresarSaldo(){
        while(true){
            let cantidad = parseFloat(prompt("Saldo a ingresar: "));

            if(isNaN(cantidad) || cantidad<0){
                alert("Por favor, sólo ingrese caracteres numéricos mayores o igual a 0.");
            }else{
                let nuevoSaldo = this.money + cantidad;

                if( nuevoSaldo > 990){
                    alert('Tu saldo de $'+nuevoSaldo+' exede el límite de $990 MXN, ingresa una cantidad menor.');
                }else{
                    alert('Ingresaste  $'+cantidad+' MXN, tu nuevo saldo es de: $'+ nuevoSaldo+' MXN.');
                    this.money = this.money + cantidad;
                    break;
                }
            }
        }
    }

    RetirarSaldo(){
        while(true){
            let retiro = parseFloat(prompt("Cantidad a retirar:"));

            if(isNaN(retiro) || retiro<0){
                alert("Por favor, sólo ingrese caracteres numéricos mayores o igual a 0.");
            }else{

                if(retiro > this.money){
                    alert("No cuentas con saldo suficiente para relizar el retiro.\nIngresa otra cantidad.");
                }else{
                    let nuevoSaldo = this.money - retiro;

                    if(nuevoSaldo < 10){
                        alert("Debes mantener un mínimo de 10 MXN! Ingresa otra cantidad.");
                    }else{
                        alert('Retiraste $'+retiro+' MXN, tu saldo restante es: $'+nuevoSaldo+' MXN.');
                        this.money = this.money - retiro;
                        break;
                    }
                }
            }
        }
    }

    ConsultarSaldo(){
        alert("Tu saldo disponible: $" + this.money + " MXN.");
    }
}

let cliente1 = new Cliente('Jair', '12345');
let cliente2 = new Cliente('Alfonso', 'hello_mundo');
let cliente3 = new Cliente('Paulino', 'pass123');
let cliente4 = new Cliente('Dilean', 'galacticMichis123');

let clientes = [cliente1, cliente2, cliente3, cliente4];

let btnLogin = document.querySelector('#login');

btnLogin.addEventListener('click', ()=>{

    usr = document.getElementById('usuario'); //Input para poner usuario
    pass = document.getElementById('pass');// Input para poner la contraseña
    login = false;
    numCliente = "";

    clientes.forEach( c => {
        if(c.name == usr.value && c.pass == pass.value){
            numCliente = clientes.indexOf(c);
            login = true;
        }   
    });


    if(login == true){
        alert(`Bienvenido/a, ${clientes[numCliente].name}`);
        document.getElementById('opciones').style.visibility = 'visible';
        document.getElementById('login-cajero').style.display = 'none';
        document.querySelector('span').innerHTML +=  `Usuario: ${clientes[numCliente].name}`;
    }else{
        alert('Datos incorrectos');
    }
    
});



let hide_pass = document.getElementById('hide_pass');
hide_pass.addEventListener('click', ()=>{

    if(hide_pass.className == "fas fa-eye"){
        hide_pass.className = "fas fa-eye-slash";
        pass.type = 'password';
    }else{
        hide_pass.className = "fas fa-eye";
        pass.type = 'text';
    }
});

let btnConsulta = document.getElementById('consultar');
btnConsulta.addEventListener('click', ()=>{
    clientes[numCliente].ConsultarSaldo();
});

let btnIngresar = document.getElementById('ingresar');
btnIngresar.addEventListener('click', ()=>{
    clientes[numCliente].IngresarSaldo();
});

let btnRetirar = document.getElementById('retirar');
btnRetirar.addEventListener('click', ()=>{
    clientes[numCliente].RetirarSaldo();
});

let btnSalir = document.getElementById('salir');
btnSalir.addEventListener('click', ()=>{
    alert(`Gracias por su preferencia, ${clientes[numCliente].name}. Vuelva pronto.`);
});










