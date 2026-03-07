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

}

const times = new Time(now);

console.log(typeof now.getHours());
document.querySelector(".date").innerHTML = date();
document.querySelector(".time").childNodes[0].nodeValue = times.time();
document.querySelector(".mer").innerHTML = times.mer();
