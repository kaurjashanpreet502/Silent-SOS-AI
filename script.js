const btn = document.getElementById("activateBtn");
const status = document.getElementById("status");
const result = document.getElementById("result");

btn.addEventListener("click", function () {

    status.innerHTML = "🟡 AI Monitoring Started...";

    document.getElementById("running").innerHTML = "Running Detected";
    document.getElementById("running").style.color = "red";
    document.getElementById("risk").innerHTML = "HIGH";
    document.getElementById("risk").style.color = "red";
    
    setTimeout(function () {

        result.innerHTML = "⚠️ Fall Detected!";

        setTimeout(function () {

            result.innerHTML = "🧍 Checking Movement...";

            setTimeout(function () {

                result.innerHTML = "🚨 No Movement Detected!";
                document.getElementById("movement").innerHTML = "No Movement Detected";
                document.getElementById("movement").style.color = "red"; 
                
                status.innerHTML = "🔴 HIGH RISK";

                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(function (position) {

                        result.innerHTML =
                        "🚨 Auto SOS Activated!<br><br>" +
                        "📍 Latitude: " + position.coords.latitude + "<br>" +
                        "📍 Longitude: " + position.coords.longitude;

                        alert("🚨 SOS Sent Successfully!");

                    });

                } else {

                    result.innerHTML =
                    "🚨 Auto SOS Activated!<br>Location not supported.";

                }

            }, 3000);

        }, 2000);

    }, 2000);

});
