const images = ['02', '03',
 '04','06', '08', 
'10', '11', '12', '13', '17']

 const image = document.querySelector('.cover_art img');
 let source;
 let i = 0;
setInterval(()=>{
    source = `../images/${images[i]}.jpg`
    image.setAttribute('src', source)
    if(i>images.length -2){
        i=0
    }
    else{
        i++
    }

}, 6000)




 