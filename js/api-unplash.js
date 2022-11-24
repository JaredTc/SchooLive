
const accesKey = 'h9f3tXrXzXe6KqjXinQx6YRVrWvjER00jbeoHkwSQ-I';
const endPoint = 'https://api.unsplash.com/search/photos';

const imgData = []

const getImages = async (query) => {
    let response = await fetch(endPoint + '?query=' + query + 
    '&client_id=' + accesKey);
    let jsonResponse = await response.json();
   let imagesList = await jsonResponse.results;
  
    // imgData.push(imagesList);

    // console.log(imgData)
      createImages(imagesList);
}




function createImages(imagesList){
    const cardCourse = document.getElementById('card_course');
    for(i in imagesList){
        cardCourse.innerHTML +=`
        <div class="cardCont">
        <div class="course-img">
            <img src="${imagesList[i].urls.thumb}" alt="">
        </div>
        <div class="infoCourse">
            <h1>Calculo </h1>
            <p>Context Network </p>
        </div>
    </div>
       
        `
    }
    // for(let i = 0 ; i < imagesList.length ; i++ ) {

    //     cardCourse.innerHTML +=`
    //     <div class="cardCont">
    //     <div class="course-img">
    //         <img src="${imagesList[i].urls.thumb}" alt="">
    //     </div>
    //     <div class="infoCourse">
    //         <h1>Calculo </h1>
    //         <p>Context Network </p>
    //     </div>
    // </div>
       
    //     `
       
    // const image = document.createElement('img');
    // image.src = imagesList[i].urls.thumb;
    // document.body.appendChild(image);
    }
    


    getImages('informatic');