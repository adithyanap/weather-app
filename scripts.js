
let now = new Date();
function date() {
    let day = now.getDate();
    let mon = now.getMonth() + 1;
    let year = now.getFullYear();
    console.log(`${day} , ${mon} , ${year}`);
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
        }else{
            this.tHours = this.hour;
        }
        if (this.min < 10) {
            this.tmin = `0${this.min}`;
        } else {
            this.tmin = this.min;
        }
        if(this.hour === 0){
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
    returnTime(){
        return [this.hour,this.min];
    }

}
function changeNght(){
    const time = new Time(now);
    data = time.returnTime();
    let night = [20,21,22,23,24,1,2,3];
    if(night.includes(data[0])){
        
        document.querySelector(".hero").style.background = `url("${'image/moon.jpg'}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background= "#080808";
        document.querySelector(".sidebar").style.background= "#080808";
        document.querySelector(".footer").style.background= "#080808";
        document.querySelector("body").style.color= "#c3b5b5";
        document.querySelector(".des").innerHTML= "It's a cloudy night";
        document.querySelector(".sImage").src= "image/smallMoon.png";

    }
    else if((data[0] > 16) &&  data[0] <= 19){
        document.querySelector(".hero").style.background = `url("${'image/sunset.jpg'}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background= "#c3b5b5";
        document.querySelector(".sidebar").style.background= "#c3b5b5";
        document.querySelector(".footer").style.background= "#c3b5b5";
        document.querySelector("body").style.color= "#080808";
        document.querySelector(".des").innerHTML= "The sun will set soon";
        document.querySelector(".sImage").src= "image/sSettingsun.png";
    }else if(data[0] >= 4 && data[0] < 7){
        document.querySelector(".hero").style.background = `url("${'image/sunrise.jpg'}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background= "#c3b5b5";
        document.querySelector(".sidebar").style.background= "#c3b5b5";
        document.querySelector(".footer").style.background= "#c3b5b5";
        document.querySelector("body").style.color= "#080808";
        document.querySelector(".des").innerHTML= "The sun is about to rise";
        document.querySelector(".sImage").src= "https://cdn-icons-png.flaticon.com/512/869/869869.png";

    }
    
}

changeNght();

const times = new Time(now);


document.querySelector(".date").innerHTML = date();
document.querySelector(".time").childNodes[0].nodeValue = times.time();
document.querySelector(".mer").innerHTML = times.mer();
