function date(){
    let now = new Date();
    let day = now.getDay();
    let mon = now.getMonth();
    let year = now.getFullYear();
    return (`${day+1}/${mon+1}/${year}`);

}

console.log(date());


document.querySelector(".date").innerHTML = date();