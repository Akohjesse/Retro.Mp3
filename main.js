import './style.scss'



const currentDate = new Date();
var w = currentDate.getDay();
var m = currentDate.getMonth();
var d = currentDate.getDate()
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var day = days[w]
var month = months[m]

document.querySelector('.day').innerHTML= `${day}, ${d} ${month}`;

timer()

async function timer(){
  var time = await currentDate.toLocaleTimeString('en-US', {
    hour:"numeric",
    minute: 'numeric'
  })
  document.querySelector('.time').innerHTML = `${time}`;
  setTimeout(timer, 1000)
}