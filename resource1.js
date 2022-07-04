//DOM manipulation
//listening for a click on the buttons for the function to run
document.querySelector("#search").addEventListener("click", getInfo);
document.querySelector("#search2").addEventListener("click", flightTravel);
document.querySelector("#search3").addEventListener("click", publicTravel);

function getInfo(e) {
  let carbonData = document.querySelector("#distance").value;
  let convertKm = carbonData * 0.62137;
  let distanceData = String(convertKm);
  let carData = document.querySelector("#myCar,option").value;

  //Fetch method we insert the URL first, this is where we get the API info from
  fetch(
    `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel?distance=${distanceData}&vehicle=${carData}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1a2675a3fbmshe0f79b9a54cd236p1f38b8jsn75f1ad360da4",
        "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
      },
    }
  ) // First .then method is where we get our first response from the api json format. It's where we make sure our response was succesfull
    .then((response) => response.json())
    .then((data) => {
      // second .then method is were we we grab the actual info we want to display on our webpage
      (document.querySelector(
        ".results"
      ).innerHTML = `<p>Carbon FootPrint: ${data.carbonEquivalent.toFixed(
        3
      )} CO2e</p>`),
        console.log(data);
    })
    .catch((err) => console.error(err));
  e.preventDefault();
}

function flightTravel(e) {
  let flightDistance = document.querySelector("#flight-distance").value;
  flightDistance = String(flightDistance * 0.62137);

  let flightType = document.querySelector("#flight").value;
  fetch(
    `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight?distance=${flightDistance}&type=${flightType}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1a2675a3fbmshe0f79b9a54cd236p1f38b8jsn75f1ad360da4",
        "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      (document.querySelector(
        ".testing"
      ).innerHTML = `<p>Carbon FootPrint: ${data.carbonEquivalent.toFixed(
        3
      )} CO2e</p>`),
        console.log(data);
    })
    .catch((err) => console.error(err));
  e.preventDefault;
}

function publicTravel(e) {
  let publicDistance = document.querySelector("#public-distance").value;
  publicDistance = publicDistance * 0.62137;
  let publicType = document.querySelector("#public-type").value;
  fetch(
    `https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit?distance=${publicDistance}&type=${publicType}`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1a2675a3fbmshe0f79b9a54cd236p1f38b8jsn75f1ad360da4",
        "X-RapidAPI-Host": "carbonfootprint1.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      (document.querySelector(
        ".testing3"
      ).innerHTML = `<p>Carbon FootPrint: ${data.carbonEquivalent.toFixed(
        3
      )} CO2e </p>`),
        console.log(data);
    })
    .catch((err) => console.error(err));

  e.preventDefault;
}


const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const year2010 = document.getElementById('year2010');
const year2011 = document.getElementById('year2011');
const year2012 = document.getElementById('year2012');
const year2013 = document.getElementById('year2013');
const year2014 = document.getElementById('year2014');
const year2015 = document.getElementById('year2015');
const year2016 = document.getElementById('year2016');
const year2017 = document.getElementById('year2017');
const year2018 = document.getElementById('year2018');
const year2019 = document.getElementById('year2019');
const year2020 = document.getElementById('year2020');


year2010.addEventListener('click', () =>{
  fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p10.innerHTML = `Total CO2e: <br> ${data[0]['co2']} <br><br> CO2e per Capita:<br>${data[0]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[0]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[0]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[0]['co2_growth_prct']}`)
})

year2011.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p11.innerHTML = `Total CO2e: <br> ${data[1]['co2']} <br><br> CO2e per Capita:<br>${data[1]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[1]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[1]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[1]['co2_growth_prct']}`)
})

year2012.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p12.innerHTML = `Total CO2e: <br> ${data[2]['co2']} <br><br> CO2e per Capita:<br>${data[2]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[2]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[2]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[2]['co2_growth_prct']}`)
})

year2013.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p13.innerHTML = `Total CO2e: <br> ${data[3]['co2']} <br><br> CO2e per Capita:<br>${data[3]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[3]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[3]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[3]['co2_growth_prct']}`)
})

year2014.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p14.innerHTML = `Total CO2e: <br> ${data[4]['co2']} <br><br> CO2e per Capita:<br>${data[4]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[4]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[4]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[4]['co2_growth_prct']}`)
})

year2015.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p15.innerHTML = `Total CO2e: <br> ${data[5]['co2']} <br><br> CO2e per Capita:<br>${data[5]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[5]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[5]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[5]['co2_growth_prct']}`)
})

year2016.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p16.innerHTML = `Total CO2e: <br> ${data[6]['co2']} <br><br> CO2e per Capita:<br>${data[6]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[6]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[6]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[6]['co2_growth_prct']}`)
})

year2017.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p17.innerHTML = `Total CO2e: <br> ${data[7]['co2']} <br><br> CO2e per Capita:<br>${data[7]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[7]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[7]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[7]['co2_growth_prct']}`)
})

year2018.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p18.innerHTML = `Total CO2e: <br> ${data[8]['co2']} <br><br> CO2e per Capita:<br>${data[8]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[8]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[8]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[8]['co2_growth_prct']}`)
})

year2019.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p19.innerHTML = `Total CO2e: <br> ${data[9]['co2']} <br><br> CO2e per Capita:<br>${data[9]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[9]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[9]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[9]['co2_growth_prct']}`)
})

year2020.addEventListener('click', () =>{
fetch('http://localhost:4000/hope1')
  .then(result => result.json())
  .then(data => p20.innerHTML = `Total CO2e: <br> ${data[10]['co2']} <br><br> CO2e per Capita:<br>${data[10]['co2_per_capita']} <br><br> CO2e from Burned Oil:<br>${data[10]['oil_co2']} <br><br> CO2e from Burned Oil per Capita: <br>${data[10]['oil_co2_per_capita']} <br><br> Total CO2e growth % from previous year:<br> ${data[10]['co2_growth_prct']}`)
})




function myFunction() {
  var x = document.getElementById("navBar");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}