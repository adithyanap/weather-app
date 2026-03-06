

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success,error);
    }else{
        console.log("not supported");
    }
}
    function success(position){
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;


        console.log(latitude);
        console.log(longitude);

    }
        function error(){
        console.log("shit");
    }