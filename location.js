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

}



function error() {
    alert("Location not found");
}



async function getAdress(lat,lon) {
    try{
    let url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    let responce = await fetch(url);
    let data = await responce.json();
    console.log(data);
    }catch{
        console.log("you are fucked up");
    }
}