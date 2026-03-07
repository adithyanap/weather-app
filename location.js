
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert("Browser error");
    }
}




async function success(position) {
    const latitude = await position.coords.latitude;
    const longitude = await position.coords.longitude;
     getAdress(latitude,longitude);
     temp(latitude,longitude);

}



function error() {
    alert("Location not found");
}



async function getAdress(lat,lon) {
    try{
    let url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    let responce = await fetch(url);
    let data = await responce.json();
    [".location",".loc"].forEach(sec =>{
    document.querySelector(sec).innerHTML = `${data.address.town}, ${data.address.state_district}, ${data.address.state}`;
    });
    }catch{
        alert("unexcepted error");
    }
}

async function temp(lat,lon){
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,pressure_msl,wind_speed_80m,visibility,rain`;
    let responce = await fetch(url);
    let data = await responce.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = `${data.current.temperature_2m} °C`;
    document.querySelector(".big-temp").innerHTML = `${data.current.temperature_2m} °C`;
    document.querySelector(".Humidity").innerHTML = `${data.current.relative_humidity_2m} %`;
    document.querySelector(".DewPoint").innerHTML = `${data.current.dew_point_2m} °C`;
    document.querySelector(".windSpeed").innerHTML = `${data.current.wind_speed_80m} km/h `;
    document.querySelector(".Visibility").innerHTML = `${data.current.visibility} m `;
    document.querySelector(".Pressure").innerHTML = `${data.current.pressure_msl} hPa`;
    document.querySelector(".rain").innerHTML = `${data.current.rain} mm`;


    
}

