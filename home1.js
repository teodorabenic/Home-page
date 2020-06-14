
let slideIndex = 1;

let myTimer;

let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('mySlides fade')[0];
  
    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  
    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  }

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
}

var myHeaders = new Headers();
myHeaders.append("Cookie", "route=80a5f1ac6864c56f56198004f671fcf8");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.edamam.com/search?q=new&app_id=7baa58d2&app_key=cb9e8a359f891b307b850e5c35fdf54d&from=0&to=3")
.then(response => response.json())
.then(function store(data) {
  let title=document.getElementsByClassName("popular");
let m_title = document.getElementsByClassName("modal-title");
let m_images = document.getElementsByClassName('modal-img');
let m_health = document.getElementsByClassName('modal-health');
let m_ingrediants = document.getElementsByClassName('modal-ingredients');
let m_diet = document.getElementsByClassName('modal-diet');
let m_time = document.getElementsByClassName('modal-time');

    for(let i=0;i<3;i++){
       
        title[i].innerHTML=data.hits[i].recipe.label;
    }  

    for(let i =0;i<3;i++){
      m_title[i].innerHTML = data.hits[i].recipe.label;
      m_images[i].src=data.hits[i].recipe.image;
      m_health[i].innerHTML="Helath:" +data.hits[i].recipe.healthLabels.join();
      m_diet[i].innerHTML="Diet: "+data.hits[i].recipe.dietLabels.join();
      m_ingrediants[i].innerHTML = "Ingrediants:"+data.hits[i].recipe.ingredientLines.join();
     m_time[i].innerHTML = "Prepare time:" + data.hits[i].recipe.totalTime + " min";
     }
    


})
.catch(function (error) {
    console.log('Request failed', error);
});










