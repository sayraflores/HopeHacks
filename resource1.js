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
