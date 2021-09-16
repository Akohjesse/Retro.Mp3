
var nameOfSong= document.querySelector('.nameOfSong');

var songs= [
    {
        owner: 'Jesse 😽',
        name: 'Isaiah Rashad - Claymore',
        path: '/sounds/Isaiah Rashad - Claymore.mp3'
    },
    {
      owner: 'Jojo 😎',
      name: 'Odunsi, Zamir, Santi -alte cruise',
      path: '../sounds/altecruise.mp3'
    },
    {
        owner: 'Jesse 😽',
        name: 'Kanye West - 24',
        path: '../sounds/24.mp3'
    },
    {
        owner: 'Jojo 😎',
        name: 'Cruel Santino - Icy',
        path: '../sounds/icy.mp3'
    },
    {
        owner: 'Jesse 😽',
        name: 'ShowDemCamp - Vipers',
        path: '../sounds/Vipers.mp3'
    },
    {
        owner: 'Jojo 😎',
        name: 'Prettyboy D-O - PULL UP (Ft. Santi)',
        path:'../sounds/pullup.mp3'
    },
    {
        owner:'Jesse 😽',
        name: 'Smino - Wild Irish Roses',
        path: '../sounds/Smino - Wild Irish Roses.mp3'
    },
    {
        owner:'Jojo 😎',
        name: 'Zamir - Munchies ft. Amaarae',
        path: '../sounds/muchies.mp3'
    },
    {
        owner:'Jesse 😽',
        name: 'The Cavemen. - Me You I ',
        path: '../sounds/meyoui.mp3' 
    },
    {
        owner:'Jojo 😎',
        name: 'Claro',
        path: '../sounds/Claro.mp3'
    },
    {
        owner:'Jesse 😽',
       name: '2pac - Letter To My Unborn Child',
       path: '../sounds/Unborn.mp3'
    },
    {
        owner:'Jojo 😎',
        name: 'Blaqbonez – Bling ft Amaarae & Buju ',
        path: '../sounds/bling.mp3'
    },
    {
        owner:'Jesse 😽',
        name: 'Joy Oladokun - taking the heat ',
        path: '../sounds/takingtheheat.mp3'
    }
]



function radio(){
    let i = Math.floor((Math.random()*10));
    console.log(i)
    let playsong = false;
    let audio = new Audio(songs[i].path);
    let playlist = document.querySelector('.owner .p');
    let nameOfSong= document.querySelector('.nameOfSong');
    nameOfSong.innerHTML = songs[i].name;
    playlist.innerHTML= songs[i].owner;
    document.querySelector('.play').addEventListener('click', (e)=>{
        playsong = !playsong;
        if(playsong){
            audio.play();
            e.target.src="./assets/play-pause-r.svg"
        }
        else{
            audio.pause()
            e.target.src='./assets/play-button-r.svg'
        }
    })
    document.querySelector('.front').addEventListener('click', ()=>{
        audio.pause()
        if(i >= songs.length -1){
            i= 0;
        }
        else{
            i++;
        }

        if(document.querySelector('.play').src=='./assets/play-button-r.svg'){
            console.log('i o sabi')
            document.querySelector('.play').src='./assets/play-pause-r.svg'
        }
        
        nameOfSong.innerHTML = songs[i].name
        playlist.innerHTML= songs[i].owner;
      audio = new Audio(songs[i].path);
      audio.play()
    });
    document.querySelector('.back').addEventListener('click', ()=>{
        audio.pause()
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
    });  
}

radio()
