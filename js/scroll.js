const logo_image = document.getElementById("logo_image");
const contacts = document.getElementById("contacts");

document.addEventListener("scroll", ()=>{
    const scroll = window.scrollY.toFixed()
    const string = String(scroll);
    const array = Array.from(string);
    let length = array.length;
    let num = 10-array[length-3];
    logo_image.style.opacity = num/10;
    contacts.style.opacity = num/10;
});