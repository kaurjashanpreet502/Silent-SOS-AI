console.log("Script loaded");
const btn = document.getElementById("activateBtn");
console.log(btn);
const status = document.getElementById("status");
const result = document.getElementById("result");

let sosCancelled = false;
let timer1, timer2, timer3;

btn.addEventListener("click", function () {
    sosCancelled = false;

    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);

    status.innerHTML = "🟡 AI Monitoring Started...";

    document.getElementById("sosTime").innerHTML = new Date().toLocaleTimeString();
    
    if (navigator.getBattery) {

    navigator.getBattery().then(function(battery){

        document.getElementById("battery").innerHTML =
        Math.round(battery.level * 100) + "%";

    });

}
    
    document.getElementById("running").innerHTML = "Running Detected";
    document.getElementById("confidence").innerHTML = "95%";
    document.getElementById("prediction").innerHTML = "Suspicious Activity Detected";
    document.getElementById("running").style.color = "red";
    document.getElementById("risk").innerHTML = "HIGH";
    document.getElementById("risk").style.color = "red";
    document.getElementById("safeBtn").style.display = "inline-block";
    
   timer1 = setTimeout(function () {

        result.innerHTML = "⚠️ Fall Detected!";

       timer2 = setTimeout(function () {

                result.innerHTML = "🧍 Checking Movement...";

              timer3 = setTimeout(function () {

                     result.innerHTML = "🚨 No Movement Detected!";
                  
                document.getElementById("movement").innerHTML = "No Movement Detected";
                document.getElementById("movement").style.color = "red"; 

                document.getElementById("confidence").innerHTML = "98%";
                document.getElementById("prediction").innerHTML = "Emergency Risk Predicted";
                  
                status.innerHTML = "🔴 HIGH RISK";
                status.style.color = "red";
                

                if(sosCancelled) return;
                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(function (position) {

                        if(sosCancelled) return;

                        let latitude = position.coords.latitude;
                        let longitude = position.coords.longitude;

                let mapLink = "https://www.google.com/maps?q=" + latitude + "," + longitude;

                result.innerHTML =
                "🚨 Auto SOS Activated!<br><br>" +
                "📍 Location:<br>" +
                "<a href='" + mapLink + "' target='_blank'>Open Live Location</a><br><br>" +
                "⏰ Time: " + new Date().toLocaleTimeString() +
                "<br>🔋 Battery: " + document.getElementById("battery").innerHTML +
                "<br>🤖 AI Confidence: " + document.getElementById("confidence").innerHTML;

                let contact = document.getElementById("emergencyContact").value;

                        if(contact==""){
                             contact = "Emergency Contact Not Added";
                        }
                        
                document.getElementById("messageBox").innerHTML =
                "📩 Emergency Message Preview:<br><br>" +
                "🚨 Possible fall detected<br>" +
                "📍 Location shared<br>" +
                "🔋 Battery: " + document.getElementById("battery").innerHTML +
                "<br>🤖 AI Confidence: " + document.getElementById("confidence").innerHTML;
                        
                        document.getElementById("contactStatus").innerHTML = "Alert Sent ✅";
                        alert(
                        "🚨 EMERGENCY ALERT SENT\n\n" +
                        "Possible fall detected.\n" +
                        "📍 Live Location Shared\n" +
                        "🔋 Battery: " + document.getElementById("battery").innerHTML + "\n" +
                        "🤖 AI Confidence: " + document.getElementById("confidence").innerHTML + "\n" +
                        "⏰ Time: " + new Date().toLocaleTimeString() + "\n\n" +
                        "📞 Alert Sent To: " + contact
                            );
                        
                    });
                    
                } else {

                    result.innerHTML =
                    "🚨 Auto SOS Activated!<br>Location not supported.";

                }

            }, 3000);

        }, 2000);

    }, 2000);

});

document.getElementById("safeBtn").addEventListener("click",function(){

sosCancelled = true;

clearTimeout(timer1);
clearTimeout(timer2);
clearTimeout(timer3);

this.style.display="none";

status.innerHTML="🟢 User Safe";
status.style.color="green";

result.innerHTML="✅ SOS Cancelled";

});
