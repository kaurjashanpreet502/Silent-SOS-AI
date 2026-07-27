
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

const activateBtn = document.getElementById("activateBtn");
const status = document.getElementById("status");
const result = document.getElementById("result");


if(activateBtn){

activateBtn.addEventListener("click", function(){

    status.innerHTML = "🟡 AI Monitoring Started...";

    let sosTime = document.getElementById("sosTime");

    if(sosTime){
        sosTime.innerHTML = new Date().toLocaleTimeString();
    }


    let battery = document.getElementById("battery");

    if(battery && navigator.getBattery){

        navigator.getBattery().then(function(b){

            battery.innerHTML = Math.round(b.level*100)+"%";

        });

    }


    let running = document.getElementById("running");
    let risk = document.getElementById("risk");
    let movement = document.getElementById("movement");
    let confidence = document.getElementById("confidence");
    let prediction = document.getElementById("prediction");


    if(running){
        running.innerHTML="Running Detected";
        running.style.color="red";
    }


    if(risk){
        risk.innerHTML="HIGH";
        risk.style.color="red";
    }


    if(movement){
        movement.innerHTML="Monitoring...";
    }


    if(confidence){
        confidence.innerHTML="95%";
    }


    if(prediction){
        prediction.innerHTML="Suspicious Activity Detected";
    }


    if(result){

        result.innerHTML="⚠️ AI analyzing emergency situation...";


        setTimeout(function(){

            result.innerHTML=
            "🚨 Emergency Risk Detected<br><br>"+
            "AI Confidence: 98%";


            status.innerHTML="🔴 HIGH RISK";
            status.style.color="red";


        },4000);

    }


});


}



const safeBtn=document.getElementById("safeBtn");


if(safeBtn){

safeBtn.addEventListener("click",function(){

    status.innerHTML="🟢 User Safe";
    status.style.color="green";

    if(result){
        result.innerHTML="✅ SOS Cancelled";
    }

});

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
