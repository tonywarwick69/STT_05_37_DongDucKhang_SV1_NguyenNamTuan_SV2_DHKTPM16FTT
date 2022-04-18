

const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
})
 window.onscroll = function() {myFunction()};

   var header = document.getElementById("header");
   var sticky = header.offsetTop;
   
   function myFunction() {
     if (window.pageYOffset > sticky) {
       header.classList.add("hot-topic");
     } else {
       header.classList.remove("hot-topic");
     }
   }
  