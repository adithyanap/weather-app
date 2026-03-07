let now = new Date();
function date() {
    let day = now.getDay();
    let mon = now.getMonth();
    let year = now.getFullYear();
    return (`${day + 1}/${mon + 1}/${year}`);

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
            this.tmin = string(min).padstart(2, "0");
        } else if(this.min >= 10 ) {
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
    let image = 'moon.jpg';
    if(data[0] >= 19){
        
        document.querySelector(".hero").style.background = `url("${image}") no-repeat center/cover`;
        document.querySelector(".weather-info").style.background= "#080808";
        document.querySelector(".sidebar").style.background= "#080808";
        document.querySelector(".footer").style.background= "#080808";
        document.querySelector("body").style.color= "#c3b5b5";
        document.querySelector(".des").innerHTML= "It's a cloudy night";
        document.querySelector(".sImage").src= "smallMoon.png";

    }
    
}
changeNght();

const times = new Time(now);


document.querySelector(".date").innerHTML = date();
document.querySelector(".time").childNodes[0].nodeValue = times.time();
document.querySelector(".mer").innerHTML = times.mer();
