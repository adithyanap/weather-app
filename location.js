let rain;
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
    getAdress(latitude, longitude);
    temp(latitude, longitude);

}

function getSWeather() {
    try {
        document.addEventListener("keypress", async (e) => {
            if (e.key === "Enter") {
                enter();

            }
        });
        async function enter() {
            try {
                let location = document.querySelector(".search-box").value;
                document.querySelector(".search-box").value = "";
                
                let url = `https://nominatim.openstreetmap.org/search?&q=${location}&format=json`;
                let responce = await fetch(url);
                let data = await responce.json();
                let lon = data[0]['lon'];
                let lat = data[0]['lat'];
                if (lon === undefined) {
                    alert("location not found");
                } else {
                    getAdress(lat, lon);
                }
            } catch {
                alert("location not found");
            }
        }
    } catch {
        console.log("unexcepted error");
    }
}

getSWeather();

function error() {
    alert("Location not found");
}
function rainyDay() {
    let image = "rainyMorining.jpg"
    if (rain > 0) {

        document.querySelector(".hero").style.background = `url("${image}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background = "#f0eaea";
        document.querySelector(".sidebar").style.background = "#f0eaea";
        document.querySelector(".footer").style.background = "#f0eaea";
        document.querySelector("body").style.color = "#080808";
        document.querySelector(".des").innerHTML = "It's a rainy day";
        document.querySelector(".sImage").src = "rainysun.png";

    }

}
rainyDay();

async function getAdress(lat, lon) {
    try {
        let url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
        let responce = await fetch(url);
        let data = await responce.json();
        [".location", ".loc"].forEach(sec => {
            if (data.address.town != undefined) {
                document.querySelector(sec).innerHTML = `${data.address.town}, ${data.address.state_district}, ${data.address.state}`;
            } else {
                document.querySelector(sec).innerHTML = `${data.address.state_district}, ${data.address.state_district}, ${data.address.state}`;
            }
        });
    } catch {
        alert("unexcepted error");
    }
}

async function temp(lat, lon) {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,pressure_msl,wind_speed_80m,visibility,rain`;
    let responce = await fetch(url);
    let data = await responce.json();
    document.querySelector(".temp").innerHTML = `${data.current.temperature_2m} °C`;
    document.querySelector(".big-temp").innerHTML = `${data.current.temperature_2m} °C`;
    document.querySelector(".Humidity").innerHTML = `${data.current.relative_humidity_2m} %`;
    document.querySelector(".DewPoint").innerHTML = `${data.current.dew_point_2m} °C`;
    document.querySelector(".windSpeed").innerHTML = `${data.current.wind_speed_80m} km/h `;
    document.querySelector(".Visibility").innerHTML = `${data.current.visibility} m `;
    document.querySelector(".Pressure").innerHTML = `${data.current.pressure_msl} hPa`;
    document.querySelector(".rain").innerHTML = `${data.current.rain} mm`;
    rain = data.current.rain;
}