setInterval(drawClock,2000);
function drawClock(){
    var now=newDtae();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
//Date
var options={year:'numeric',month:'long',day:'numeric'};
var today=newDate();
document.getElementById("date").innerHTML=today.toLocateDtaeString("en-US".options);
//hour
var hourAngle=(360*(hour/12))+((360/12)*(minute/60));
var minAngle=360*(minute/60);
document.getElementById("hour").style.transform="rotate("+(hourAngle)+"deg)";
//minute
document.getElementById("min").style.transform="rotate("+(minAngle)+"deg)";
//GetHumidity Temperature And Rain
var xhttp=new XMLHttpRequest();
xhttp.onreadstatechange=function(){
    if(this.readyState== 4 && this.status == 200){
        var txt=this.responseText;
        var obj=JSON.parse(txt);
        document.getElementById("rain").innerHTML=obj.Rain+"%";
        document.getElementById("temperature").innerHTML=Math.round(obj.Temperature)+"&deg;C";
        document.getElementById("temp").innerHTML=Math.round(obj.Temperature)+"&deg;C";
        document.getElementById("humidity").innerHTML=Math.round(obj.Humidity)+%;
    }
};
xhttp.open("GET","readADC",true);
xhttp.send();
}