let popUp = document.getElementById('success')
const btn = document.querySelector('#register')
const btnv2 = document.getElementById('registerDoc')


let baseUrl = 'http://localhost:8080/api/'

// let studys = localStorage.getItem("objectItems");
// if (studys) {
//     studys = JSON.parse(studys);
// } else {
//     studys = [];

// }

const registerData = async (event) => {
    event.preventDefault();

    let Name = document.getElementById("name").value;
    let userName = document.getElementById("Username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (Name.length > 0 && userName.length > 0) {
        try {
            const response = await fetch(`${baseUrl}signUp`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Name: Name,
                    username: userName,
                    email: email,
                    password: password,
                    rol: 1
                })
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                // const { email, userName, password } = jsonResponse;
                popUp.innerHTML = `<div class="success" id="success">Registro Exitoso</div>`


            }


        } catch (error) {
            console.log(error)
        }
    } else {
        popUp.innerHTML = `<div class="warning" id="success">Algo Salio Mal</div>`
    }


}



const RegisterDocente = async (event) => {
    event.preventDefault()
    let Name = document.getElementById("name").value;
    let userName = document.getElementById("Username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    try {
        const response = await fetch(`${baseUrl}signUp`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: Name,
                username: userName,
                email: email,
                password: password,
                rol: 2
            })
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            // const { email, userName, password } = jsonResponse;
            popUp.innerHTML = `
            <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Notify</h2>
                <a class="close" href="#">&times;</a>
                <div class="content">
                  Registro Exitoso
                </div>
            </div>
        </div>
            `

            console.log('Registro Exitoso')

            // cleanAll();
        }
    } catch (error) {
        console.log(error)
    }


}

// btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     registerData();
//     // RegisterDocente();

//   })



const startSession = async (event) => {
    event.preventDefault();

    let userName = document.getElementById("Username").value;
    let password = document.getElementById("password").value;

    try {
        const response = await fetch(`${baseUrl}signIn`, {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: userName,
                password: password,
            })
        });

        if (response.ok) {

            const jsonResponse = await response.json();


            const user = jsonResponse.data.user
            const pass = jsonResponse.data.password
            let token = jsonResponse.data.token


            if (token != null) {
                // console.log('Validacion Exitosa');

                localStorage.setItem('Token', token)
                localStorage.setItem('User', user)

                window.location.href = "/pages/dashboard.html";


            } else {


            }


            // cleanAll();
        }

    } catch (error) {
        // console.log(error)
        popUp.innerHTML = `<div class="warning" id="success">Error de Usuario y/o Passsword</div>`
    }

}




function CloseSession() {
    // var pathname = window.location.pathname;

    localStorage.removeItem('Token');
    localStorage.removeItem('User')

    window.location.href = '/index.html'


}




// function cleanAll(){
//     document.getElementById('form').reset();
// }

// cleanAll();







var calificacion = 0;
function nota() {
    calificacion = 0;
    incorrectas = "";
    contestadas = 0;

    corregirTexto();

    for (i = 1; i < 13; i++) {
        if (document.examen[i].checked) {
            contestadas++;
            if (document.examen[i].value == "1") calificacion++;
            if (document.examen[i].value != "1") {
                incorrectas += document.examen[i].name.substr(2, 2) + ", ";
            }
        }
    }

    // with (document.forms.examen) {
    //     if (q51.checked || q52.checked || q53.checked || q54.checked || q55.checked) {
    //         contestadas++;
    //         if (!q51.checked && !q52.checked && q53.checked && !q54.checked && q55.checked) calificacion++;
    //         else incorrectas += q51.value.substr(2, 2) + ", ";
    //     }
    // }
    error = contestadas - calificacion;
    mensaje = contestadas + " preguntas contestadas de 5:\n  " + calificacion + " preguntas acertadas.\n  " + error + " preguntas no acertadas: " + incorrectas + "\n\nHas obtenido una calificación de " + calificacion * 2 + " ptos.";
    alert(mensaje);
}

function corregirTexto() {
    var huec0_rsp = String.fromCharCode(112, 114, 111, 116, 111, 110, 101, 115);
    var v_hueco = document.examen.hueco0.value;

    v_hueco = v_hueco.toLowerCase();
    while (v_hueco.indexOf(" ") == 0) {
        v_hueco = v_hueco.substr(1);
    }
    while (v_hueco.indexOf(" ") != -1) {
        var pos = v_hueco.indexOf(" ");
        v_hueco = v_hueco.substring(0, pos) + v_hueco.substr(pos + 1);
    }
    if (v_hueco != "") {
        contestadas++;
        if (v_hueco == huec0_rsp) calificacion++;
        else incorrectas += " 1, ";
    }
}



function validate() {
    calificacion = 0;
    incorrectas = "";
    contestadas = 0;



    for (i = 1; i < 13; i++) {
        if (document.exam[i].checked) {
            contestadas++;
            if (document.exam[i].value == "1") calificacion++;
            if (document.exam[i].value != "1") {
                incorrectas += document.exam[i].name.substr(2, 2) + ", ";
            }
        }
    }

    with (document.forms.examen) {
        if (q51.checked || q52.checked || q53.checked || q54.checked || q55.checked) {
            contestadas++;
            if (!q51.checked && !q52.checked && q53.checked && !q54.checked && q55.checked) calificacion++;
            else incorrectas += q51.value.substr(2, 2) + ", ";
        }
    }
    error = contestadas - calificacion;
    mensaje = contestadas + " preguntas contestadas de 5:\n  " + calificacion + " preguntas acertadas.\n  " + error + " preguntas no acertadas: " + incorrectas + "\n\nHas obtenido una calificación de " + calificacion * 2 + " ptos.";
    alert(mensaje);
}



