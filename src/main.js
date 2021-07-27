import data from './data/ghibli/ghibli.js';
import {getFilm, searchFilms, searchYears, allProducers, sortAZ, sortZA, arrayTop, bestFilms} from './data.js';
const filmsGhibli = getFilm(data);//obtiene la data Original y la copia seria filmGhibli

// trae solo films.
const showAllFilms = document.getElementById("showAllFilms");
const inputSearch = document.getElementById("searchFilm");
const count = document.getElementById("count");
// funciones de nav
const backNav = document.getElementById("backNav");
const ranking = document.getElementById('ranking');
//funciones del filtro
const elementFilterYears = document.querySelector("#filter-years");
const filterProducer = document.querySelector("#filter-producer");
const filterAZ = document.querySelector("#filter-AZ");
const filterZA = document.querySelector(".sortZA");

const TopTenNav = document.getElementById('TopTenNav'); 

let allDataFilms = getFilm(data);

const deleteNodo = (showFilms) => {
  while(showFilms.lastChild){
      showFilms.removeChild(showFilms.lastChild);
  }
}

const showFilmInScreen = (arrayData) =>{
  deleteNodo(showAllFilms);
  if(arrayData.length === 0){
    const messegeError = document.createElement('div');
    messegeError.innerHTML=  `<h1> Not found this movie </h1> <img src="img/error01.gif" alt="" class="imgNotFoundSearch">`;
    showAllFilms.appendChild(messegeError);
  }
  //--------------------------
    arrayData.forEach((element) => {
       const divFilm = document.createElement("div"); //div para cada tarjeta
       divFilm.classList.add("card");
        divFilm.innerHTML=`<img src="${element.poster}" alt="">
        <p class="films-titles">${element.title}</p> 
        <p class="subTitleCard"> <span class="spanCard">Producer: </span>${element.producer}</p> 
        <p class="subTitleCard"><span class="spanCard">Release date: </span> ${element.release_date}</p>
        <p class="subTitleCard"><span class="spanCard">Score: </span> ${element.rt_score}</p>`;
        divFilm.setAttribute("id" , element.id);
        showAllFilms.appendChild(divFilm);

        const identificador = document.getElementById(element.id)
        identificador.addEventListener("click", newScreen);
        function newScreen(){
        showAllFilms.textContent = '';
        //QUITA Y MUESTRA ELEMENTO
        document.querySelector(".informationHeader").style.display = "none";
        document.querySelector(".containerSelect").style.display = "none"
        document.querySelector("header").style.position="absolute";

        const article = document.createElement("article");
        article.classList.add("articleNewS");

        const asideSection = document.createElement('aside');
        asideSection.classList.add("aside")
        asideSection.innerHTML= `<h1 class="titleNewScreen">${element.title}</h1>
        <img src=${element.poster} class="editImg">
        <div class="boxAside"> <p class="asideP"><span class="spanDescription">Release Date: </span>${element.release_date}</p>
        <p class="asideP"><span class="spanDescription">Director:</span> ${element.director}</p>
        <p class="asideP"><span class="spanDescription">Producer:</span> ${element.producer}</p> </div>`;

        const mainSection = document.createElement("section");
        mainSection.classList.add("mainSection");
        mainSection.innerHTML=`<div class="boxDescription"><h3 class="subTitleBox">Description:</h3> <p class="fontF">${element.description}</p></div>`;
        //VEHICLES        
        const vehicleLoop = document.createElement('section');
        vehicleLoop.classList.add("sectionVehicles");
        vehicleLoop.innerHTML=`<h3 class="subTitleVehicles">Vehicles: </h3>`;
        const vehicles = element.vehicles;
        if(vehicles.length === 0){
          vehicleLoop.innerHTML=`<h3 class="subTitleError">Vehicles:</h3> <div class="addFlexError"> There are no vehicles.<img class="errorVehicles"src="img/totoroLlorando.gif"></div>`;
        }else{
          for (let i = 0; i < vehicles.length; i++) {
            vehicleLoop.innerHTML+=`
            <div class="tarjeta-wrap">
              <div class="tarjeta">
                <div class="adelante">
                  <h1 class="designNameCard">${vehicles[i].name}</h1>
                  <img src=" ${vehicles[i].img}" alt="" class="imgDesignCard">
                </div>
                <div class="atras"> 
                  <div class="decriptionCharacters">
                    <p><span class="spanDescription">Description:</span> ${vehicles[i].description}</p>
                    <p><span class="spanDescription">Vehicle class: </span>${vehicles[i].vehicle_class}</p>
                    <p><span class="spanDescription">Length:</span> ${vehicles[i].length}</p>
                  </div>
                </div>
              </div>
            </div>`;
          }
        }
        
        //CONTAINER ALL PEOPLE
        const peopleSection =document.createElement("section");
        peopleSection.classList.add("peopleSection")//WRAP
        peopleSection.innerHTML=`<h3 class="subTitlePeople">People:</h3>`;
        
        //BOX ALL CHARACTERS    
        const peopleLoop = document.createElement('section');
        peopleLoop.classList.add("boxAllCharacters");
   
        const character = element.people;
        for (let index = 0; index < character.length-1; index++) {
          peopleSection.innerHTML+=`
          <div class="tarjeta-wrap">
            <div class="tarjeta">
              <div class="adelante">
                <h1 class="designNameCard">${character[index].name}</h1>
                <img src=" ${character[index].img}" alt="" class="imgDesignCard">
              </div>
              <div class="atras"> 
                <div class="decriptionCharacters">
                  <p><span class="spanDescription">Gander:</span> ${character[index].gender}</p>
                  <p><span class="spanDescription">Age: </span>${character[index].age}</p>
                  <p><span class="spanDescription">Eye color:</span> ${character[index].eye_color}</p>
                  <p><span class="spanDescription">Hair color:</span> ${character[index].hair_color}</p>
                  <p><span class="spanDescription">Specie:</span>  ${character[index].specie}</p>
                </div>
              </div>
            </div>
          </div>`;
        }
        
        //LOCATIONS
        const sectionLocations = document.createElement('section');
        sectionLocations.classList.add("sectionLocation")

        sectionLocations.innerHTML=`<h3 class="subTitleLocation">Locations:</h3>`;
        const locations = element.locations;
        if(locations.length === 0){
          sectionLocations.innerHTML=`<h3 class="subTitleError">Locations:</h3> <div class="addFlexError"> There are no locations.<img class="errorVehicles"src="img/totoroLlorando.gif"></div>`;
        }else{
          for (let i = 0; i < locations.length-1; i++) {
            sectionLocations.innerHTML+=`
            <div class="tarjeta-wrap">
              <div class="tarjeta">
                <div class="adelante">
                  <h1 class="designNameCard">${locations[i].name}</h1>
                  <img src=" ${locations[i].img}" alt="" class="imgDesignCard">
                </div>
                <div class="atras"> 
                  <div class="decriptionCharacters">
                    <p><span class="spanDescription">Climate:</span> ${locations[i].climate}</p>
                    <p><span class="spanDescription">Terrain:</span> ${locations[i].terrain}</p>
                    <p><span class="spanDescription">Surface water:</span>  ${locations[i].surface_water}</p>
                    <p><span class="spanDescription">Residents:</span>  ${locations[i].residents}</p>
                  </div>
                </div>
              </div>
            </div>`;
          }
        }
        showAllFilms.append(article);
        article.append(asideSection, mainSection);  
        peopleSection.append(peopleLoop);
        mainSection.append( peopleSection, sectionLocations, vehicleLoop);
      }
    });
    count.innerHTML=`Count <span id="spanCount">(${arrayData.length})</span>`;
    //return showAllFilms;
};
showFilmInScreen(filmsGhibli);

/* VOLVER A FILMS */
backNav.addEventListener('click',()=>{
  showAllFilms.innerHTML = '';
  document.querySelector(".containerSelect").style.display = "block"
  document.querySelector(".informationHeader").style.display = "block";
  document.querySelector("header").style.position="fixed";
  showFilmInScreen(filmsGhibli);
})

inputSearch.addEventListener('keyup',() =>{
  allDataFilms = searchFilms(filmsGhibli, 'title', inputSearch.value);
  showFilmInScreen(allDataFilms);
});

const withoutDuplicate = (arr) => {
  let result = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
  });
  return result;
}

const arrProducer = (arrObj) => {
  let newArray = [];
  arrObj.forEach((ele) => {    
      newArray.push(ele.producer);
  });
  return newArray;
}

const arrYears = (arrObj) =>{
  let newArrayYears =[];
  arrObj.forEach((elem)=>{
    newArrayYears.push(elem.release_date);
  });
  return newArrayYears;
}

const onlyProducer = arrProducer(filmsGhibli);
const nameProducer = withoutDuplicate(onlyProducer);

const onlyYears = arrYears(filmsGhibli);
const eachYears = withoutDuplicate(onlyYears)


/* DROPDOWN-Years */
eachYears.forEach(item => {
  const newOption = document.createElement('option');
  newOption.value= item;
  newOption.textContent = item;
  elementFilterYears.appendChild(newOption)
});

elementFilterYears.addEventListener('change',() =>{
  if(elementFilterYears.value === 'all'){
    showAllFilms.innerHTML = '';
    showFilmInScreen(filmsGhibli);
    
  } else{
    const catchFilter = searchYears(filmsGhibli, elementFilterYears.value);
    showAllFilms.innerHTML='';
    showFilmInScreen(catchFilter);
  }
})
//--------------------------------

/* DROPDOWN-allProducer */
nameProducer.forEach(name => {
  const optionProducer = document.createElement('option');  
  optionProducer.value= name;
  optionProducer.textContent = name;
  filterProducer.appendChild(optionProducer);
});

filterProducer.addEventListener('change',() =>{
  if(filterProducer.value === 'all'){
    showAllFilms.innerHTML = '';
    showFilmInScreen(filmsGhibli);
  } else{
    const catchProducer = allProducers(filmsGhibli, filterProducer.value);
    showAllFilms.innerHTML='';
    showFilmInScreen(catchProducer);
  }
})
//Sort by AZ-ZA 
filterAZ.addEventListener('change',() =>{
  if(filterAZ.value ==='A-Z'){
    const AZ = sortAZ(filmsGhibli, filterAZ.value);
    showAllFilms.innerHTML = '';
    showFilmInScreen(AZ);
  } if(filterZA.value === 'Z-A'){
    const ZA = sortZA(filmsGhibli, filterAZ.value);
    showAllFilms.innerHTML = '';
    showFilmInScreen(ZA);
  }
})

TopTenNav.addEventListener('click', ()=>{
  const topTenDemo = arrayTop(filmsGhibli, TopTenNav).slice(0, 10);
  showFilmInScreen(topTenDemo);
})

ranking.addEventListener('click',() =>{
  const rankingDemo = bestFilms(filmsGhibli, ranking);
  showFilmInScreen(rankingDemo);
});
