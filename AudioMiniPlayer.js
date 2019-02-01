var audioSources={
    "1":{
            songsrc:"Without-You.mp3",
            title:"Without-You",
            type:"audio/mpeg",
        },
    "2":{
            songsrc:"Swan-Song.mp3",
            title:"Swan-Song",
            type:"audio/mpeg",
        },
    "3":{
        songsrc:"Sign-Of-The-Times.mp3",
        title:"Swan-Song",
        type:"audio/mpeg",
    },
    "4":{
        songsrc:"Lele-Pons.mp3",
        title:"Swan-Song",
        type:"audio/mpeg",
    },
    "5":{
        songsrc:"Scared-To-Be-Lonely.mp3",
        title:"Swan-Song",
        type:"audio/mpeg",
    },  
}
var orignalSources={
    "1":{
            songsrc:"Without-You.mp3",
            title:"Without-You",
            type:"audio/mpeg",
        },
    "2":{
            songsrc:"Swan-Song.mp3",
            title:"Swan-Song",
            type:"audio/mpeg",
        },
    "3":{
        songsrc:"Sign-Of-The-Times.mp3",
        title:"Swan-Song",
        type:"audio/mpeg",
    },
    "4":{
        songsrc:"Lele-Pons.mp3",
        title:"Swan-Song",
        type:"audio/mpeg",
    },
    "5":{
        songsrc:"Scared-To-Be-Lonely.mp3",
        title:"Swan-Song",
        type:"audio/mpeg",
    },  
}
var playStatus=0;
var shuffleStatus=0;
var repeatStatus=0;
var selectedSong=1;
var audio = document.getElementById("audioTrack");
/*************************************************************************************************************/
document.getElementById("song1").addEventListener("click",changescr1);
document.getElementById("song2").addEventListener("click",changescr2);
document.getElementById("song3").addEventListener("click",changescr3);
document.getElementById("song4").addEventListener("click",changescr4);
document.getElementById("song5").addEventListener("click",changescr5);
/*************************************************************************************************************/
document.getElementById("loop").addEventListener("click", loopFun);
document.getElementById("shuffle").addEventListener("click", shuffleFun);
document.getElementById("play").addEventListener("click", playFun);
/*************************************************************************************************************/
function playFun()
{
    if(playStatus==0)
        {
            document.getElementById("play").value="Play current Song";
            playStatus=1;
            console.log(playStatus);
            audio.addEventListener("ended", function(e){
                selectedSong++;
                if(selectedSong<6)
                    {
                        document.getElementById("mp3src").src=audioSources[selectedSong].songsrc;
                        audio.load();
                        audio.play();
                    }
                });
        }
    else if(playStatus==1)
        {
            document.getElementById("play").value="Play List";
            playStatus=0;
            console.log(playStatus);
            audio.addEventListener("ended", function(e){
                document.getElementById("mp3src").src=audioSources[selectedSong-1].songsrc;
                audio.load();
                audio.pause();});

        }
}
/*************************************************************************************************************/
function shuffleFun()
{
    if(shuffleStatus==0)
    {
        document.getElementById("shuffle").value="Un Shuffle";
        shuffleStatus=1;
        var nums = [1,2,3,4,5];
        var ranNums = [];
        i = nums.length;
        j = 0;
        while (i--) {
        j = Math.floor(Math.random() * (i+1));
        ranNums.push(nums[j]);
        nums.splice(j,1);
        }
        console.log(ranNums)
        for (var i=0;i<ranNums.length;i++) 
        {
            
            audioSources[parseInt(i)+1].songsrc=orignalSources[ranNums[i]].songsrc;
            selectedSong=1;
            document.getElementById("mp3src").src=audioSources[selectedSong].songsrc;
            audio.load();
            audio.play();
        }
        console.log(orignalSources);
        console.log(audioSources)
    }
    else
    {
        document.getElementById("shuffle").value="Shuffle"
        shuffleStatus=0;
        audioSources=orignalSources;
        selectedSong=1;
        document.getElementById("mp3src").src=audioSources[selectedSong].songsrc;
        audio.load();
        audio.play();}

}
/*************************************************************************************************************/
function loopFun()
{
    if(repeatStatus==0)
    {
        document.getElementById("loop").value="No Repeat";
        repeatStatus=1;
        if(playStatus==0)
        {
            audio.addEventListener("ended", function(e){
                audio.play();
            });
        }
        else 
        {
            console.log("selectedsong:"+selectedSong);
            if(selectedSong==5)
            {
                audio.addEventListener("ended", function(e){  
                selectedSong=1;
                document.getElementById("mp3src").src=audioSources[selectedSong].songsrc;
                audio.load();
                audio.play();
            });
            }
        }
    }
    else
    {
        document.getElementById("loop").value="Repeat";
        repeatStatus=0;}
}
/*************************************************************************************************************/
function changescr1()
    { 
        selectedSong=1;
        document.getElementById("mp3src").src="Without-You.mp3";
        audio.load();
        audio.play();
    }
function changescr2()
    { 
        selectedSong=2;
        document.getElementById("mp3src").src="Swan-Song.mp3";
        audio.load();
        audio.play();
    }   
function changescr3()
    { 
        selectedSong=3;
        document.getElementById("mp3src").src="Sign-Of-The-Times.mp3";
        audio.load();
        audio.play();
    }   
function changescr4()
    { 
        selectedSong=4;
        document.getElementById("mp3src").src="Lele-Pons.mp3";
        audio.load();
        audio.play();
    } 
function changescr5()
    { 
        selectedSong=5;
        document.getElementById("mp3src").src="Scared-To-Be-Lonely.mp3";
        audio.load();
        audio.play();
    } 