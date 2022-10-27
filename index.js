
navbar();

function navbar (){
    document.getElementById('navbar').innerHTML = `
    <nav class="navbar">
        <div class="logo">Schoo<span class="live">Live</span></div>
        <ul class="nav-links">
            <div class="menu">
                <li><a class="nav__link active" href="../index.html">Inicio </a></li>
                <li><a class="nav__link active" href="#Materias">Materias </a></li>
                <li><a class="nav__link" href="#Gallery">Comunidad</a></li>
                <li class="btn__login"><a class="nav__link" href="pages/signIn.html">Entrar</a></li>
                <li class="btn__register"><a class="nav__link" href="pages/registroScreen.html">Registrar</a></li>
            </div>
        </ul>
    </nav>
    `
}

// navbarEntrar();
// function navbarEntrar(){
//     document.getElementById('navbar-2').innerHTML = `
//     <nav class="navbar">
//         <div class="logo">Schoo<span class="live">Live</span></div>
//         <ul class="nav-links">
//             <div class="menu">
//                 <li><a class="nav__link active" href="../index.html">Inicio </a></li>
//                 <li class="btn__login"><a class="nav__link" href="pages/signIn.html">Entrar</a></li>
//                 <li class="btn__register"><a class="nav__link" href="pages/signUp.html">Registrar</a></li>
//             </div>
//         </ul>
//     </nav>
//     `
// }


// <li><a class="nav__link" href="#About">Sobre Nosotros</a></li>