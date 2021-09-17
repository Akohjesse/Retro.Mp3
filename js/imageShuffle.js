const images = [ '11', '12', '13', '17', '02']

 const image = document.querySelector('.cover_art img');
 let source;
 let i = 0;
setInterval(()=>{
    source = `../images/${images[i]}.jpg`
  
    image.setAttribute('src', source);
   
    if(i>images.length -2){
        i=0
    }
    else{
        i++
    }

}, 8000)




 