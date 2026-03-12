let now = new Date();
let rain;
let nowT = new Date();
let hour = nowT.getHours();
function date() {
    let day = now.getDate();
    let mon = now.getMonth() + 1;
    let year = now.getFullYear();
    return (`${day}/${mon}/${year}`);

}
class Time {
    constructor(now) {
        this.hour = now.getHours();
        this.min = now.getMinutes();
    }
    time() {
        if (this.hour > 12) {
            this.tHours = this.hour - 12;
        } else {
            this.tHours = this.hour;
        }
        if (this.min < 10) {
            this.tmin = `0${this.min}`;
        } else {
            this.tmin = this.min;
        }
        if (this.hour === 0) {
            this.tHours = 12;
        }
        return (`${this.tHours}:${this.tmin}`);
    }
    mer() {
        if (this.hour > 12) {
            this.merd = "pm";
        } else {
            this.merd = "am"
        }
        return (this.merd);
    }
    returnTime() {
        return [this.hour, this.min];
    }

}
function changeNght() {
    const time = new Time(now);
    data = time.returnTime();
    let night = [20, 21, 22, 23, 24, 1, 2, 3];
    if (night.includes(data[0])) {

        document.querySelector(".hero").style.background = `url("${'image/moon.jpg'}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background = "#080808";
        document.querySelector(".footer").style.background = "#080808";
        document.querySelector("body").style.color = "#c3b5b5";
        document.querySelector(".des").innerHTML = "It's a cloudy night";
        document.querySelector(".sImage").src = "image/smallMoon.png";

    }
    else if ((data[0] > 16) && data[0] <= 19) {
        document.querySelector(".hero").style.background = `url("${'image/sunset.jpg'}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background = "#c3b5b5";
        document.querySelector(".footer").style.background = "#c3b5b5";
        document.querySelector("body").style.color = "#080808";
        document.querySelector(".des").innerHTML = "The sun will set soon";
        document.querySelector(".sImage").src = "image/sSettingsun.png";
    } else if (data[0] >= 4 && data[0] < 7) {
        document.querySelector(".hero").style.background = `url("${'image/sunrise.jpg'}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background = "#c3b5b5";
        document.querySelector(".footer").style.background = "#c3b5b5";
        document.querySelector("body").style.color = "#080808";
        document.querySelector(".des").innerHTML = "The sun is about to rise";
        document.querySelector(".sImage").src = "https://cdn-icons-png.flaticon.com/512/869/869869.png";

    }

}
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
    getAdress(latitude, longitude,"");
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
                    if(data.name === ""){
                        alert("not a specific location");
                        return 0;
                    }
                    temp(lat, lon);
                    getAdress(lat, lon, location);
                }
            } catch {
                alert("location not found");
            }
        }
    } catch {
        console.log("unexcepted error");
    }
}
function error() {
    alert("Location not found");
}
async function getAdress(lat, lon, def) {
        let url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
        let responce = await fetch(url);
        let data = await responce.json();
        console.log(data);
        if(data.name === ""){
            alert("not a specific location");
            return 0;
        }
        if(data.address.state_district === undefined){
        document.querySelector(".loc").innerHTML =`${def.toUpperCase()}` ;
        document.querySelector(".location").innerHTML =`${def.toUpperCase()}` ;
        }
        else if(data.address.city === undefined){
        document.querySelector(".loc").innerHTML =`${data.address.state_district.toUpperCase()}, ${data.name.toUpperCase()}` ;
        document.querySelector(".location").innerHTML =`${data.address.state_district.toUpperCase()}, ${data.name.toUpperCase()}` ;
        console.log(`${data.address.state_district}`);
        }else{
        document.querySelector(".loc").innerHTML =`${data.address.city.toUpperCase()}, ${data.name.toUpperCase()}` ;
        document.querySelector(".location").innerHTML =`${data.address.city.toUpperCase()}, ${data.name.toUpperCase()}` ;
        console.log(`${data.address.city}`);
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
function rainyDay() {
    let image = "image/rainyMorining.jpg"
    if (rain > 0 && hour < 18) {

        document.querySelector(".hero").style.background = `url("${image}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background = "#f0eaea";
        document.querySelector(".footer").style.background = "#f0eaea";
        document.querySelector("body").style.color = "#080808";
        document.querySelector(".des").innerHTML = "It's a rainy day";
        document.querySelector(".sImage").src = "image/rainysun.png";

    } else if (rain > 0 && hour > 18) {
        document.querySelector(".hero").style.background = `url("image/rainNight.jpg") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background = "#080808";
        document.querySelector(".footer").style.background = "#080808";
        document.querySelector("body").style.color = "#f0eaea";
        document.querySelector(".des").innerHTML = "It's a rainy night";
        document.querySelector(".sImage").src = "image/smallMoon.png";

    }

}


getSWeather();
changeNght();
rainyDay();

const times = new Time(now);


document.querySelector(".date").innerHTML = date();
document.querySelector(".time").childNodes[0].nodeValue = times.time();
document.querySelector(".mer").innerHTML = times.mer();
