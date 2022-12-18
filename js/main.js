const modalchaBtn = document.querySelector('.modalcha');
const brgBtn = document.querySelector('.burger');




brgBtn.addEventListener("click", () => {

    if (modalchaBtn.className == "modalcha none") {
        modalchaBtn.className = 'modalcha';
    } else {
        modalchaBtn.className = 'modalcha none';
    }

});


const spanAnim = document.querySelector('.span');

spanAnim.addEventListener("click", () => {
    if (spanAnim.className == " burger_spn, span") {
        spanAnim.className == "span";
    } else {
        spanAnim.className == " burger_spn, span";
    }
});




function fan() {
    const inputEl = document.getElementById("inputEl")

    const modal = {
        email: inputEl.value,
    }
    console.log(modal);

    if (modal.email == null || modal.email == "") {
        alert(`Please enter your email`)
    } else {
        alert(`Your email succussfully  `)
    }
}



// const b = document.querySelector("b")
// console.dir(b.textContent);

// function btn1() {
//     const hisob = 5.99 * 12;
//     b.textContent = hisob
// }




var ElementList = document.querySelector(".pricing_hero");

var ElementBtn1 = document.querySelector(".btn1");
var ElementBtn2 = document.querySelector(".btn2");
var ElementBtn3 = document.querySelector(".btn3");


ElementBtn1.addEventListener("click", function (e) {
    e.preventDefault();

    if (ElementBtn1.textContent == "5.99$/month") {
        ElementBtn1.textContent = 5.99 * 12 + "$/year";
    } else {
        ElementBtn1.textContent = '5.99$/month';
    }
});


ElementBtn2.addEventListener("click", function (e) {
    e.preventDefault();

    if (ElementBtn2.textContent == "15.99$/month") {
        ElementBtn2.textContent = 15.99 * 12 + "$/year";
    } else {
        ElementBtn2.textContent = '15.99$/month';
    }
});


ElementBtn3.addEventListener("click", function (e) {
    e.preventDefault();

    if (ElementBtn3.textContent == "20.99$/month") {
        ElementBtn3.textContent = 20.99 * 12 + "$/year";
    } else {
        ElementBtn3.textContent = '20.99$/month';
    }
});



const EmInput = document.querySelector("#inputEmail")
// const EmButton = document.querySelector("#btnSub")


function eml() {
    const obj = {
        email: EmInput.value,
    }
    if (obj.email == null || obj.email == "") {
        alert('please enter your email')
    } else {
        alert('your email succussfully')
    }
}