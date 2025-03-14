function setStatus(status) {
    document.getElementById("server-name").innerText = status.server_name || "Unknown";
    document.getElementById("last-update").innerText = status.last_status_update ? Date(status.last_status_update) : Date();
    document.getElementById("error").innerText = status.error || "None";
    document.getElementById("player-count").innerText = status.player_count || status.player_count === 0 ? 0 : "Unknown";
    document.getElementById("port").innerText = status.port || "Unknown";
}

// Get the status json, parse it, and set coresponding values on the page
async function updateStatus() {
    let response = undefined;
    try {
        response = await fetch("/status.json");
    } catch (e) {
        console.log(e);
	if (e.toString().includes("NetworkError")) {
            setStatus({
                error: "Unable to connect to status server",
	    });
	} else {
            setStatus({
                error: e.toString(),
            });
        }
        return;
    }
    if (!response.ok) {
        setStatus({
            error: `Error code from status server: ${response.status}`,
        });
        return;
    }

    const json = await response.json();
    console.log(json);

    if (json.error === "timeout('timed out')") {
        setStatus({
            last_status_update: json.last_status_update,
            error: "Unable to connect to Valheim server",
	});
        return;
    }

    setStatus(json);
}

// Get the initial status
updateStatus();

// Update the status every 10 seconds
setInterval(updateStatus, 10 * 1000);
