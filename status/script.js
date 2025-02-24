async function updateStatus() {
    const response = await fetch("/status.json");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();

    document.getElementById("server-name").innerHTML = json.server_name;

    const statusText = `Last update: ${new Date(json.last_status_update)}, Player count: ${json.player_count}`;

    document.getElementById("status").innerHTML = statusText;
}

// Get the initial status
updateStatus();

// Update the status every 10 seconds
setInterval(updateStatus, 10 * 1000);
