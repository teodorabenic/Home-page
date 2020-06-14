

window.addEventListener("load",loadContent1);
// document.getElementById("load").addEventListener("click",loadContent2);



function loadContent1(){
    let url = "https://api.edamam.com/search?q=any&app_id=b453405d&app_key=274404aa7289897607292e1f5d1f5287&&from=0&to=10&calories=100-300&yield=50";
    getContent(url);
    displayTopRated(JSON.parse(localStorage.getItem("data")),0,2);
}

// function loadContent2(){
//     let url = "https://api.edamam.com/search?q=any&app_id=b453405d&app_key=274404aa7289897607292e1f5d1f5287&&from=0&to=10&calories=100-300&yield=50";
//     getContent(url);
//     loadmore(JSON.parse(localStorage.getItem("data"))); 
// }

function getContent(url){
fetch(url)
        .then(response => response.json())
        .then(function store(data) {
            localStorage.clear();
            localStorage.setItem("data",JSON.stringify(data.hits));
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function displayTopRated(data,a,b) {    
console.log(data);
let images=document.getElementsByClassName("recepi-img");
let labels=document.getElementsByClassName("label");
let health=document.getElementsByClassName("health");
let diet=document.getElementsByClassName("diet");

let m_title = document.getElementsByClassName("l-modal-title");
let m_images = document.getElementsByClassName('l-modal-img');
let m_health = document.getElementsByClassName('l-modal-health');
let m_ingrediants = document.getElementsByClassName('l-modal-ingredients');
let m_diet = document.getElementsByClassName('l-modal-diet');
let m_time = document.getElementsByClassName('l-modal-time');

for(let i=a;i<b;i++){
    images[i].src=data[i].recipe.image;
    labels[i].innerHTML=data[i].recipe.label;
    health[i].innerHTML="Helath: "+data[i].recipe.healthLabels.join();
    diet[i].innerHTML="Diet: "+data[i].recipe.dietLabels.join(); 
}


for (let i = a;i<b;i++){
    m_title[i].innerHTML = data[i].recipe.label;
    m_images[i].src=data[i].recipe.image;
    m_health[i].innerHTML="Helath:" +data[i].recipe.healthLabels.join();
    m_diet[i].innerHTML="Diet: "+data[i].recipe.dietLabels.join();
    m_ingrediants[i].innerHTML = "Ingrediants:"+data[i].recipe.ingredientLines.join();
    m_time[i].innerHTML = "Prepare time:" + data[i].recipe.totalTime + " min";
}

}
//document.getElementById("load").addEventListener("click",loadmore);

//ne radi :(

// let current = 0;
// function loadmore(data){
//     let data=JSON.parse(localStorage.getItem("data"));
//     let image = [];
//     for (i = 0; i<8;i++){
//       image[i] = data[i+2].recipe.image;
//     }
//     let text = "";
//     let max = 3;
//     for (let i = 2;i<max;i++){
//         text =`<div class="column">
//         // <div class="img-container"><img class="recepi-img" src="``"></div>
//         <div class="info-container">
//             <p class="label">`+data[i].recipe.label+`</p>
//             <p class="health">`+"Helath: "+data[i].recipe.healthLabels.join();+`</p>
//             <p class="diet">`+"Diet: "+data[i].recipe.dietLabels.join();+`</p>`;
       
            
//         document.getElementById("row").innerHTML = document.getElementById("row").innerHTML+text; 
//         current++;
//     }

// }
  







