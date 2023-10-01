
function make_album (param:{
    artist_name:string,
    album_title:string,
},noOfTrack ?:number){
    console.log(`The name of Artist is "${param.artist_name}"`)
    console.log(`The title of album is "${param.album_title}"`)
    console.log(`The no.of tracks are "${noOfTrack}"`)
};  

let param1 ={
     artist_name:"Rahat",
     album_title:"Disco Song",
};

 let param2 = {
    artist_name:"Hamesh",
    album_title:"sad songs",
 };

 let param3 = {
    artist_name:"Atif Aslam",
    album_title:"Wedding songs",
 };

let dictionary1 = make_album(param1,12);

let dictionary2 = make_album(param2,8);
let dictionary3 = make_album(param3,15);
