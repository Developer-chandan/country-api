/* function userInfo(){
    fetch("https://randomuser.me/api/?results=5")
    .then(responce => responce.json())
    .then(data => getUser(data))

}
const getUser = (info) => {
    const resultlist = info.results
    // resultlist.forEach(element => {
    //     console.log(element)
    // });
    for (const info of resultlist){
        console.log(info.email)
    }
} */


// countries
const getCountry = () =>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(responce =>responce.json())
    .then(data => countyInfo(data));
}

const countyInfo = (countries)=>{
    const displayCounty = document.getElementById("display");
    // console.log(countries)
    for(const country of countries){
    const div = document.createElement("div");

      const h1= document.createElement("h1");
    div.classList.add("country")
        // console.log(country)
    //     div.innerHTML = country.name;
    div.innerHTML = `
   <h1> ${country.name}</h1>
    <h3>${country.region}</h3>
    <img width="200px" src="${country.flag}"/>
    <button class="btn btn-danger mt-2" onclick="countryInfo('${country.name}')">Details</button>
    `
    displayCounty.appendChild(div)
     
    }

}

const countryInfo = (name) =>{
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
.then(responce => responce.json())
.then(data => details(data))
}


const details = (singleCountry) =>{
console.log(singleCountry)
  const currentCountry = document.getElementById("currentCuntry") 
  const div = document.createElement("div");
  div.classList.add("displayCurrent");
  div.innerHTML =`
     <h1>Country Name: ${singleCountry[0].name}</h1>
     <h3>Country Region: ${singleCountry[0].region}</h3>
     
     <img class="img-fluid" src="${singleCountry[0].flag}">
  `
  currentCountry.appendChild(div)
}


getCountry();