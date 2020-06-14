var myHeaders = new Headers();
myHeaders.append("Cookie", "route=80a5f1ac6864c56f56198004f671fcf8");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
let url = "https://api.edamam.com/search?q=vegan&app_id=b453405d&app_key=274404aa7289897607292e1f5d1f5287&from=0&to=3&yield=50";
fetch(url)
.then(response => response.json())
.then(function store(data) {
    let images = document.getElementsByClassName('vegan-img');
    let title=document.getElementsByClassName("title");

    let m_title = document.getElementsByClassName("v-title");
    let m_images = document.getElementsByClassName('v-modal-img');
    let m_health = document.getElementsByClassName('v-modal-health');
    let m_ingrediants = document.getElementsByClassName('v-modal-ingredients');
    let m_diet = document.getElementsByClassName('v-modal-diet');
    let m_time = document.getElementsByClassName('v-modal-time');

    for(let i=0;i<3;i++){

        title[i].innerHTML=data.hits[i].recipe.label;
        images[i].src=data.hits[i].recipe.image;

       
        
    }

    for (let i =0 ;i<3;i++){
        m_title.innerHTML = data.hits[i].recipe.label;
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

