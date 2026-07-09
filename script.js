const randomFact = document.getElementById("random-cat-facts");

const randomPic = document.getElementById("random-cat-image");

const getBtn = document.querySelector(".getFactBtn");

getBtn.addEventListener('click', ()=>{

 getFact()
 getImage()
});


const getFactURL = "https://catfact.ninja/fact";
async function getFact() {
    try{
        randomFact.innerText = "Loading...";
    const responce = await fetch(getFactURL);
    const data = await responce.json();
    randomFact.innerText = data.fact;
    }catch(err){
        randomFact.innerText = "Some API error";
    }
}


const getImageURL = "https://api.thecatapi.com/v1/images/search";
async function getImage() {
    try{
        randomPic.alt = "Loading...";
    const responce = await fetch(getImageURL);
    const data = await responce.json();
    randomPic.src = data[0].url;
    }catch(err){
        randomPic.alt = "Some API error";
    }
}


