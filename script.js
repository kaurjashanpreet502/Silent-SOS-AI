const btn = document.getElementById("activateBtn");
const status = document.getElementById("status");
const result = document.getElementById("result");

btn.addEventListener("click", function () {

    status.innerHTML = "🟡 AI Monitoring Started...";

    document.getElementById("sosTime").innerHTML = new Date().toLocaleTimeString();
    
    document.getElementById("battery").innerHTML = "85%";
    
    document.getElementById("running").innerHTML = "Running Detected";
    document.getElementById("running").style.color = "red";
    document.getElementById("risk").innerHTML = "HIGH";
    document.getElementById("risk").style.color = "red";
    document.getElementById("safeBtn").style.display = "inline-block";
    
    setTimeout(function () {

        result.innerHTML = "⚠️ Fall Detected!";

        setTimeout(function () {

            result.innerHTML = "🧍 Checking Movement...";

            setTimeout(function () {

                result.innerHTML = "🚨 No Movement Detected!";
                document.getElementById("movement").innerHTML = "No Movement Detected";
                document.getElementById("movement").style.color = "red"; 
                
                status.innerHTML = "🔴 HIGH RISK";
                status.style.color = "red";
                
            setTimeout(function(){

                if(document.getElementById("safeBtn").style.display=="none")
                return;

                document.getElementById("safeBtn").style.display="none";

                 },5000);
                
                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(function (position) {

                        result.innerHTML =
                        "🚨 Auto SOS Activated!<br><br>" +
                        "📍 Latitude: " + position.coords.latitude + "<br>" +
                        "📍 Longitude: " + position.coords.longitude +
                        "<br>⏰ Time: " + new Date().toLocaleTimeString() +
                        "<br>🔋 Battery: " + document.getElementById("battery").innerHTML;

                        document.getElementById("contactStatus").innerHTML = "Alert Sent ✅";
                        alert("🚨 Auto SOS Sent!\n📍 Live Location Shared\n📞 Emergency Contact Alerted");

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

this.style.display="none";

status.innerHTML="🟢 User Safe";

result.innerHTML="✅ SOS Cancelled";

});
