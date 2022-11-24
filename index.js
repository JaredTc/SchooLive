const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const modal = document.getElementById('modal');
const resTest = document.getElementById('resTest');
const resReal = document.getElementById('res');

let vdeo = {
    link2: '/assets/video/quehacelainformatica.mp4',
    link3: '/assets/video/ordenador.mp4',
    link4: '/assets/video/storague.mp4'
}


if(open){
    open.addEventListener('click', () =>{
        modal_container.classList.add('show');
    })
} if (close){
    close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
})
}


const evaluar = (event) => {
    event.preventDefault();

    const res = resTest.value;
    let resp = '86.6cm^2'
    if (res+'cm^2' != resp){
        resReal.innerHTML = ` Respuesta Erronea ,la respuesta es ${resp}`
        } else{
            resReal.innerHTML = ` Respuesta Correcta`
        }


}





const vidio = document.getElementById('video')

function changeVideo(event){
    event.preventDefault()
    
  
        vidio.innerHTML = `
        <div id="video" class="videoPlay">
        <video width="972" height="547" src="${vdeo.link2}"
        controls="controls"></video>
        </div>
   `
}
function changeVideo2(event){
    event.preventDefault()
    
  
        vidio.innerHTML = `
        <div id="video" class="videoPlay">
        <video width="972" height="547" src="${vdeo.link3}"
        controls="controls"></video>
        </div>
   `
}
function changeVideo3(event){
    event.preventDefault()
    
  
        vidio.innerHTML = `
        <div id="video" class="videoPlay">
        <video width="972" height="547" src="${vdeo.link4}"
        controls="controls"></video>
        </div>
   `
}

