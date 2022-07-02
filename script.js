function myFunction() {
    var x = document.getElementById("navBar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


APIData = document.getElementById('1PartyData');

APIData.addEventListener('click', () => {
    fetch('http://localhost:4000/hope1')
      //FETCH RETURNS A PROMISE, SO WE USE .THEN FOR AN ACTION IF THE CALL IS SUCCESSFULL,
    .then(result => console.log(result))
    ;
})