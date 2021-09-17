
import {songs} from "./songs.js";

function radio(){
    let i = Math.floor((Math.random()*10));
    let playsong = false;
    let timer;
    let audio = new Audio(songs[i].path);
    let playlist = document.querySelector('.owner .p');
    let nameOfSong= document.querySelector('.nameOfSong');
    nameOfSong.innerHTML = songs[i].name;
    playlist.innerHTML= songs[i].owner;
    var percent = 0;

  
    //This fires when the user clicks the button to play or pause the audio
    document.querySelector('.play').addEventListener('click', (e)=>{
        playsong = !playsong;
        if(playsong){
            audio.play();
            audio.addEventListener("playing", function(e) {
                var duration = e.target.duration;
                advance(duration, audio);
              });
            e.target.src="./assets/play-pause-r.svg"
        }
        else{
            audio.pause()
            e.target.src='./assets/play-button-r.svg'
            audio.addEventListener("pause", function() {
                clearTimeout(timer);
              });
        }
    })

    
    //if the player is fastforwarded
    document.querySelector('.front').addEventListener('click', ()=>{
        percent = 0;
        playsong = true;
        document.querySelector('.play img').src='./assets/play-pause-r.svg'
        audio.pause()
        audio.addEventListener("pause", function() {
            clearTimeout(timer);
          });
        if(i >= songs.length -1){
            i= 0;
        }
        else{
            i++;
        }
        nameOfSong.innerHTML = songs[i].name
        playlist.innerHTML= songs[i].owner;
        audio = new Audio(songs[i].path);
         audio.play();
         audio.addEventListener("playing", function(e) {
            var duration = e.target.duration;
            advance(duration, audio);
          });
    });
    document.querySelector('.back').addEventListener('click', ()=>{
        percent= 0;
        playsong = true;
        document.querySelector('.play img').src='./assets/play-pause-r.svg'
        audio.pause()
        audio.addEventListener("pause", function() {
            clearTimeout(timer);
          });
        if(i <= 0){
            i= songs.length -1;
        }
        else{
            i = i-1;
        }
        nameOfSong.innerHTML = songs[i].name
        playlist.innerHTML= songs[i].owner;
        audio = new Audio(songs[i].path);
        audio.play()
        audio.addEventListener("playing", function(e) {
            var duration = e.target.duration;
            advance(duration, audio);
          });
    });  
     
   
    var advance = function(duration, element) {
        var progress = document.querySelector(".container_progress"),
            increment = 10/duration;
        percent = Math.min(increment * element.currentTime * 10, 100);
        progress.style.width = percent+'%'
        startTimer(duration, element);
      }
      var startTimer = function(duration, element){ 
        if(percent < 100) {
          timer = setTimeout(function (){advance(duration, element)}, 100);
        }
      }
}


radio()

