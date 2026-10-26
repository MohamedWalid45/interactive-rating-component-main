const rates = document.querySelectorAll(".container ul li");
const ratingCard = document.querySelector(".container");
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".result");
const num = document.querySelector(".rate");


let selectedRate=null;

rates.forEach(function (rate) {
    rate.addEventListener("click",function(){
        rates.forEach(function (r) {
            r.classList.remove("selected");
        });
        rate.classList.add("selected");
        selectedRate = rate.textContent.trim();
        console.log(selectedRate);
    })
})

submitBtn.addEventListener("click", function () {

    if (selectedRate === null) {
        alert("اختار تقييم الأول");
        return;
    }

    num.textContent= selectedRate;

    ratingCard.style.display="none";
    result.style.display="flex";



    
});