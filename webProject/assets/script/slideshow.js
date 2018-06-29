var image=0;
slideShow();
function slideShow(){
var i;
var slides=document.getElementsByClassName('slide');
for(i=0;i<slides.length;i++){
    //console.log( slides[i]);
    slides[i].style.display="none";
}
image++;
if(image>slides.length){
    image=1;
}
if(slides[image-1]!==undefined)
slides[image-1].style.display='block';
setTimeout(slideShow,7000);
}

