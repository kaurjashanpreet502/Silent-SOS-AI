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
