var miejsce = document.getElementById('miejsce');
var ctx = miejsce.getContext('2d'); 
ctx.lineWidth = 8;
ctx.lineCap = 'butt';
function pioblicz(stopien){
    var funkcja = Math.PI/180;
    return stopien*funkcja;
}
function obliczaniedni(){
    var dzis=new Date();
}
function pobierzczas(){
    var czekanie=0;
    var oddni=0;
    var oddni1=0;
    var dzis=new Date();
    var rok=dzis.getFullYear();
    var dni=dzis.getDate();
    var miesiac=dzis.getMonth();
    var tygodnia=dzis.getDay();
    var godziny=dzis.getHours();
    var minuty=dzis.getMinutes();
    var sekundy=dzis.getSeconds();
    
    
    if(((dni>=1) && (miesiac>=8))&((dni<=25)&&(miesiac<=12))){
        czekanie="Świąt BN";
        var czasmija=new Date(rok, 11, 25);
        oddni=czasmija.getTime()-dzis.getTime();
        oddni=Math.floor(oddni / (1000 * 60 * 60 * 24));
        oddni1=135;
    }
    else if(((dni>=26)&&(miesiac<=12))&((dni<=31)&&(miesiac<=12))){
        czekanie="Sylwestra";
        var czasmija=new Date(rok, 11, 30);
        oddni=czasmija.getTime()-dzis.getTime();
        oddni=Math.floor(oddni / (1000 * 60 * 60 * 24));
        oddni1=5;
    }
    else if(((dni>=1)&&(miesiac<=1))&((dni<=24)&&(miesiac<=6))){
        czekanie="Wakacji";
        var czasmija=new Date(rok, 5, 23);
        oddni=czasmija.getTime()-dzis.getTime();
        oddni=Math.floor(oddni / (1000 * 60 * 60 * 24));
        if((rok%4==0 && rok%100!=0) || rok%400==0){
            oddni1=175;
        }
        else{
            oddni1=174;
        }
        
    }
    else if(((dni>=25)&&(miesiac<=6))&((dni<=31)&&(miesiac<=8))){
        czekanie="Rozpoczęcia Roku Szkolnego";
        var czasmija=new Date(rok, 7, 0);
        oddni=czasmija.getTime()-dzis.getTime();
        oddni=Math.floor(oddni / (1000 * 60 * 60 * 24));
        oddni1=69;
    }
    
    if(minuty==0){
        var odgodziny=24-godziny;
    }
    else{
        var odgodziny=24-godziny-1;
    }
    if(sekundy==0){
        var odminuty=60-minuty;
    }
    else{
        var odminuty=60-minuty-1;
    }
    var odsekundy=60-sekundy;
    //zerowanie
    ctx.fillStyle = '#333';
    ctx.fillRect(0,0,250,100);
    ctx.strokeStyle= '#000000';
    ctx.fillStyle = '#444';
    ctx.beginPath();
    ctx.arc(50, 70, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 70, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(150, 70, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 70, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    

    ctx.strokeStyle= '#42f5da';
    //Dni
    ctx.beginPath();
    ctx.arc(50, 70, 20, pioblicz(270), pioblicz((-oddni*(360/oddni1))-90));
    ctx.stroke();
    //Godziny
    ctx.strokeStyle= '#42f56f';
    ctx.beginPath();
    ctx.arc(100, 70, 20, pioblicz(270), pioblicz((-odgodziny*15)-90));
    ctx.stroke();
    //Minuty
    ctx.strokeStyle= '#d4ae17';
    ctx.beginPath();
    ctx.arc(150, 70, 20, pioblicz(270), pioblicz((-odminuty*6)-90));
    ctx.stroke();
    //Sekundy
    ctx.strokeStyle= '#c91e63';
    ctx.beginPath();
    ctx.arc(200, 70, 20, pioblicz(270), pioblicz((-odsekundy*6)-90));
    ctx.stroke();
    ctx.fillStyle= "#ffffff";
    ctx.textAlign = "center";
    ctx.font = "20px Arial";
    ctx.fillText("Czas do "+czekanie+" :", 125, 30);
    ctx.font = "7px Arial";
    ctx.fillText("Dni:", 50, 68);
    ctx.fillText(oddni, 50, 77);
    ctx.fillText("Godziny:", 100, 68);
    ctx.fillText(odgodziny, 100, 77);
    ctx.fillText("Minuty:", 150, 68);
    ctx.fillText(odminuty, 150, 77);
    ctx.fillText("Sekundy:", 200, 68);
    ctx.fillText(odsekundy, 200, 77);
}
setInterval(pobierzczas,1000);