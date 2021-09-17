
const currentDate = new Date();
var w = currentDate.getDay();
var m = currentDate.getMonth();
var d = currentDate.getDate()
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var day = days[w]
var month = months[m]


setTimeout(()=>{
    document.querySelector('.day').innerHTML= `${day}, ${d} ${month}`;
    document.querySelector('.time').innerHTML = `${moment().format('LT')}`;
}, 100)


document.querySelector('.ankher').addEventListener('click', ()=>{
    document.querySelector('#about').style.display='block'
    document.body.style.overflow="hidden";
})

document.querySelector('#about').addEventListener('click', (e)=>{
    if(!e.target.classList.contains('wrap')){
        document.body.style.overflow="visible";
        e.target.style.display='none'
    }
 
});
 




