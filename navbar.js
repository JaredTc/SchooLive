let SesionName = localStorage.getItem('User')

jQuery(
    function ($) {

   
        //  var URLactual = window.location;
        //  console.log(URLactual)
        var pathname = window.location.pathname;

        if (pathname == '/pages/dashboard.html') {

            document.getElementById('usr').innerHTML = `${SesionName}`
            document.getElementById('navBar').innerHTML = `
            <nav class="navbar">
                <div class="logo">Schoo<span class="live">Live</span></div>
                <ul class="nav-links">
                    <div class="menu">
                    <li><a class="nav__link" href="#Home">Inicio</a></li>
                        <li class="dropdown">
                        <a class="dropbtn" href="#Start" >Materias</a>
                        <div class="dropdown-content">
                        <a href="calculo.html">Matematicas</a>
                        <a href="physic.html">Fisica</a>
                        <a href="qmika.html">Quimica</a>
                        <a href="informatic.html">Informatica</a>
                    </div>
                        </li>
                       
                       
                        <li class="dropdown">
                                          <a class="dropbtn" > ${SesionName} </a>
                                         
                                          </li>
                        <li class="btn__login"><a class="nav__link" onclick="CloseSession()" href="#">Salir</a></li>
                       
                    </div>
                </ul>
            </nav>
            `
        } else if (pathname == '/pages/account.html') {
            document.getElementById('navBar').innerHTML = `
            <nav class="navbar">
                <div class="logo">Schoo<span class="live">Live</span></div>
                <ul class="nav-links">
                    <div class="menu">
                    <li><a class="nav__link" href="dashboard.html">Inicio</a></li>
                        <li class="dropdown">
                        <a class="dropbtn" >Materias</a>
                        <div class="dropdown-content">
                            <a href="matematicas.html">Matematicas</a>
                            <a href="physic.html">Fisica</a>

                            <a href=                            <a href="#">Quimica</a>"#">Informatica</a>
                        </div>
                        </li>
                        <li><a class="nav__link" href="#Comunidad">Comunidad</a></li>
                       
                        <li class="dropdown">
                                          <a class="dropbtn" > ${SesionName} </a>
                                         
                                          </li>
                        <li class="btn__login"><a class="nav__link" onclick="CloseSession()" href="#">Salir</a></li>
                       
                    </div>
                </ul>
            </nav>
            `
        } else {
            document.getElementById('navBar').innerHTML = `
            <nav class="navbar">
                <div class="logo">Schoo<span class="live">Live</span></div>
                <ul class="nav-links">
                    <div class="menu">
                    <li><a class="nav__link" href="dashboard.html">Inicio</a></li>
                        <li class="dropdown">
                        <a class="dropbtn" >Materias</a>
                        <div class="dropdown-content">
                        <a href="calculo.html">Matematicas</a>
                        <a href="physic.html">Fisica</a>
                        <a href="qmika.html">Quimica</a>
                        <a href="informatic.html">Informatica</a>
                    </div>
                        </li>
                     
                       
                        <li class="dropdown">
                                          <a class="dropbtn" > ${SesionName} </a>
                                        
                                          </li>
                        <li class="btn__login"><a class="nav__link" onclick="CloseSession()" href="#">Salir</a></li>
                       
                    </div>
                </ul>
            </nav>
            `
        }
        // <li><a class="nav__link" href="#Comunidad">Comunidad</a></li>


    },
    // function (){
    //     let userName = localStorage.getItem('User')
    // document.getElementById('usr').innerHTML = `${userName}`
    // }
    //  document.getElementById('usr').innerHTML = `${SesionName}`
    // function(){

    //     let nextP = document.getElementById('arrowDown');

    //     nextP.addEventListener('click', (event) => {
    //         event.preventDefault();

    //     })


    // },

    $(".desplegable > h2").click(function() {      
        $(this).next(".contenido").toggle(500);
      }),
  
      $(".triCheckbox").click(function() {
        var estado = Number($(this).attr("data-estado"));
        if (estado == 1)
          estado = -2;
  
        estado += 1;
        //Comprobar si estamos en padre o en hijo.
        var liPadre = $(this).parent("li");
  
        if (liPadre.parents('ul').length >= 2) {
          //Entonces el elemento es un hijo   
          //Si estamos en el hijo dando permisos, darselos al padre.
          var permisoPadre = liPadre.parent("ul").parent("li").children(".triCheckbox");
          if (estado != -1 && permisoPadre.attr("data-estado") == -1)
            liPadre.parent("ul").parent("li").children(".triCheckbox").attr("data-estado", 0);
  
        } else {
          //Si estamos quitando permisos, quitar a los hijos
          if (estado == -1)
            liPadre.find(".triCheckbox").attr("data-estado", estado);
        }
        $(this).attr("data-estado", estado);
      })
)
