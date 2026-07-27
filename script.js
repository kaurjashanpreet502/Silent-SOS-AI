console.log("Silent SOS AI Loaded");

function startProtection(){

    localStorage.setItem("protectionActive","true");

    let status = document.getElementById("status");
    let result = document.getElementById("result");

    status.innerHTML="🟡 AI Monitoring Started...";


    setTimeout(function(){

        status.innerHTML="🔴 HIGH RISK DETECTED";
        status.style.color="red";

        result.innerHTML=
        "🚨 Possible Emergency Situation<br><br>"+
        "🤖 AI Analyzing...<br>"+
        "Confidence: 98%";


    },1000);


    setTimeout(function(){

        window.location.href="monitor.html";

    },3000);

}


if(document.getElementById("running")){

    document.getElementById("running").innerHTML="Running Detected";
    document.getElementById("running").style.color="red";

    document.getElementById("risk").innerHTML="HIGH";
    document.getElementById("risk").style.color="red";

    document.getElementById("movement").innerHTML="No Movement Detected";
    document.getElementById("movement").style.color="red";

    document.getElementById("confidence").innerHTML="98%";

    document.getElementById("prediction").innerHTML=
    "Emergency Risk Predicted";


    setTimeout(function(){

        window.location.href="sos.html";

    },10000);

}

// SOS PAGE LOGIC

if(document.getElementById("sosStatus")){


document.getElementById("sosTime").innerHTML =
new Date().toLocaleTimeString();


document.getElementById("contactStatus").innerHTML =
"Alert Sent ✅";


document.getElementById("messageBox").innerHTML =
"📩 Emergency Message Preview:<br><br>" +
"🚨 Possible emergency detected<br>" +
"📍 Location shared<br>" +
"🤖 AI Confidence: 98%";



if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){


let latitude = position.coords.latitude;
let longitude = position.coords.longitude;


let mapLink =
"https://www.google.com/maps?q="
+ latitude + "," + longitude;


document.getElementById("locationBox").innerHTML =
"📍 Live Location Shared<br><br>" +
"<a href='" + mapLink + "' target='_blank'>Open Location</a>";


});


}



let safeBtn=document.getElementById("safeBtn");


if(safeBtn){

safeBtn.addEventListener("click",function(){


document.getElementById("sosStatus").innerHTML =
"🟢 SOS Cancelled";


document.getElementById("contactStatus").innerHTML =
"Notified - Cancelled";


document.getElementById("messageBox").innerHTML =
"✅ User marked safe. No further action required.";


});

}


}
// SOS COUNTDOWN LOGIC

if(document.getElementById("countdown")){

let time = 5;

let countdown = document.getElementById("countdown");

countdown.innerHTML = time;


let timer = setInterval(function(){

    time--;

    if(time > 0){

        countdown.innerHTML = time;

    }


    if(time == 0){

        clearInterval(timer);


        document.getElementById("sosStatus").innerHTML =
        "🔴 SOS ACTIVATED";


        countdown.innerHTML =
        "SOS Sent 🚨";


        document.getElementById("messageBox").innerHTML =
        "📩 Emergency Message Sent ✅<br><br>"+
        "🚨 Possible emergency detected<br>"+
        "📍 Location Shared<br>"+
        "🤖 AI Confidence: 98%";


    }


},1000);



document.getElementById("safeBtn").addEventListener("click",function(){

    clearInterval(timer);


    document.getElementById("sosStatus").innerHTML =
    "🟢 SOS Cancelled";


    countdown.innerHTML =
    "User is Safe ✅";


});
}

// PROFILE SAVE

function saveProfile(){

alert("Button working");
    
let name = document.getElementById("userName").value;

let phone = document.getElementById("userPhone").value;

let emergencyName = document.getElementById("emergencyName").value;

let emergencyPhone = document.getElementById("emergencyPhone").value;


localStorage.setItem("userName", name);
localStorage.setItem("userPhone", phone);
localStorage.setItem("emergencyName", emergencyName);
localStorage.setItem("emergencyPhone", emergencyPhone);


document.getElementById("profileMessage").innerHTML =
"✅ Profile Saved Successfully";


}
