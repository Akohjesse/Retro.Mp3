import 'animate.css'
import './style.scss'
import './about.scss'
import moment from 'moment'

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
        document.querySelector('#about').style.display='none'
    }
 
});


var nameOfSong= document.querySelector('.nameOfSong');

var songs= [
    {
        owner: 'Jesse',
        name: 'Kanye West - 24',
        path: './assets/Kanye West - 24 (Official Audio).mp3'
    },
    {
      owner: 'Jesse',
      name: 'Isaiah Rashad - Claymore',
      path: './assets/Isaiah Rashad - Claymore.mp3'
    }

]

function radio(){
    let i = 0;
    let playsong = false;
    let audio = new Audio(songs[i].path);

    let nameOfSong= document.querySelector('.nameOfSong');
    nameOfSong.innerHTML = songs[i].name
    document.querySelector('.play').addEventListener('click', ()=>{
        playsong = !playsong;
        if(playsong){
            audio.play()
        }
        else{
            audio.pause()
        }
    })
    document.querySelector('.front').addEventListener('click', ()=>{
        i++
      audio = new Audio(songs[i].path);
      console.log(audio);
      nameOfSong.innerHTML = songs[i].name
    });
    document.querySelector('.back').addEventListener('click', ()=>{
        i= i-1;
        audio = new Audio(songs[i].path);
        console.log(audio);
        nameOfSong.innerHTML = songs[i].name
      })
}

radio()




