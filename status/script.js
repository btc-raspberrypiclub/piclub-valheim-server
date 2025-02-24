// Get the status json, parse it, and set coresponding values on the page
async function updateStatus() {
    const response = await fetch("/status.json");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();

    document.getElementById("server-name").innerText = json.server_name;
    document.getElementById("last-update").innerText = json.last_status_update;
    document.getElementById("error").innerText = json.error || "None";
    document.getElementById("player-count").innerText = json.player_count;
    document.getElementById("port").innerText = json.port;
}

// Get the initial status
updateStatus();

// Update the status every 10 seconds
setInterval(updateStatus, 10 * 1000);
