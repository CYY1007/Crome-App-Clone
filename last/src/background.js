const imgArr = ["balckstars.jpg","bluechair.jpg","lockystars.jpg","purplemountain.jpg","purplesky.jpg","sunsetforest.jpg"]
const IMG_KEY = "img"
const preimg = localStorage.getItem(IMG_KEY)
let img
do{
    img = imgArr[Math.floor(Math.random() * imgArr.length)]
}while(preimg === img)

const targetdiv = document.querySelector(".bgimg")
targetdiv.style.cssText =  `border: 0;
padding: 0;
background-image: url(img/${img});
min-height: 100%;
background-position: center;
background-size: cover`;

localStorage.setItem(IMG_KEY,img)

