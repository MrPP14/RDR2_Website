var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } 
  else {
    document.getElementById("nav").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}


window.addEventListener('scroll',() =>{
  const scrollH=window.scrollY;
  console.log(scrollH);

  if(scrollH > 800){
    var a=document.getElementById("myBtn");
    a.classList.add("show")
    a.classList.remove("hide")
  }

  if(scrollH < 800){
    var a=document.getElementById("myBtn");
    a.classList.remove("show")
    a.classList.add("hide")
  }

  if(scrollH > 1200)
  {
    var a=document.getElementById("im");
    a.classList.add("showonscrol")
    a.classList.remove("hideonscrol")
  }

  if(scrollH < 1200)
  {
    var a=document.getElementById("im");
    a.classList.remove("showonscrol")
    a.classList.add("hideonscrol")
  }

  if(scrollH > 2000)
  {
    var a=document.getElementById("im1");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 2000)
  {
    var a=document.getElementById("im1");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 3000)
  {
    var a=document.getElementById("im2");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 3000)
  {
    var a=document.getElementById("im2");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 5000)
  {
    var a=document.getElementById("im3");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 5000)
  {
    var a=document.getElementById("im3");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 7000)
  {
    var a=document.getElementById("im4");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 7000)
  {
    var a=document.getElementById("im4");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 8500)
  {
    var a=document.getElementById("im5");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 8500)
  {
    var a=document.getElementById("im5");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 10000)
  {
    var a=document.getElementById("im6");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 10000)
  {
    var a=document.getElementById("im6");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 11500)
  {
    var a=document.getElementById("im7");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 11500)
  {
    var a=document.getElementById("im7");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 13000)
  {
    var a=document.getElementById("im8");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 13000)
  {
    var a=document.getElementById("im8");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 14000)
  {
    var a=document.getElementById("im9");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH <  14000)
  {
    var a=document.getElementById("im9");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }

  if(scrollH > 16000)
  {
    var a=document.getElementById("im10");
    a.classList.add("showonscroll")
    a.classList.remove("hideonscroll")
  }

  if(scrollH < 16000)
  {
    var a=document.getElementById("im10");
    a.classList.remove("showonscroll")
    a.classList.add("hideonscroll")
  }
});


function topFunction() {
  document.body.scrollTop = 0;
  var sound = document.getElementById("audio");
  sound.play();
}


window.addEventListener("scroll", () => {
  let scroll = scrollY;
  const section = document.querySelector("section");
  const overlay = document.querySelector(".overlay");
  
  section.style.backgroundSize = `${100 + (scroll * 0.1)}%`;
  overlay.style.background = `rgba(0, 0, 0, ${scroll * 1.7 / window.innerHeight})`
})