let now = new Date();
function date(){
    let day = now.getDay();
    let mon = now.getMonth();
    let year = now.getFullYear();
    return (`${day+1}/${mon+1}/${year}`);

}

class Time {
    constructor(now){
        this.hour = now.getHours();
        this.min = now.getMinutes();
    }
    time(){
        if (this.hour > 12){
            if (this.hour < 10){
                this.tHours = string(hour).padstart(2,"0");
            }
            this.tHours = this.hour-12;
            return(`${this.tHours}:${this.min}`);
        }else{
            this.tHours = 11;
            if (this.hour === 0 ){
                this.tHours = 12;
            }
            return(`${this.tHours}:${this.min}`);
        }
    }
    mer(){
        if(this.hour > 12){
            this.merd = "pm";
        }else{
            this.merd = "am"
        }
        return (this.merd);
    }

}

const times = new Time(now);


document.querySelector(".date").innerHTML = date();
console.log( times.time());

document.querySelector(".time").childNodes[0].nodeValue = times.time();
document.querySelector(".mer").innerHTML = times.mer();