document.addEventListener("DOMContentLoaded", init);
document.getElementById("btn_save_data").addEventListener('click', addMusic);

var db = null;

function init() {
    if (typeof indexedDB !== "undefined") {
        let request = indexedDB.open("DJDatabase", 1);

        request.onupgradeneeded = function(event) {
            console.log("Database upgrade needed");
            db = event.target.result;
            if (!db.objectStoreNames.contains("music")) {
                db.createObjectStore("music", { keyPath: "id", autoIncrement: true });
            }
        }

        request.onsuccess = function(event) {
            console.log("Database opened successfully");
            db = event.target.result;
            getAllMusic();
        }

        request.onerror = function(event) {
            console.error("Database error:", event);
        }

    } else {
        alert("Ihr Browser unterstützt IndexedDB nicht.");
    }
}

function addMusic() {
    let title = document.getElementById("title").value;
    let artist = document.getElementById("artist").value;
    let year = parseInt(document.getElementById("year").value);

    let music = {
        title: title,
        artist: artist,
        year: year
    }

    let transaction = db.transaction(["music"], "readwrite");
    let store = transaction.objectStore("music");
    let request = store.add(music);

    request.onsuccess = function(event) {
        console.log("Musik erfolgreich gespeichert");
        resetInputs();
        getAllMusic();
    }

    request.onerror = function(event) {
        console.error("Fehler beim Speichern der Musik:", event);
    }
}

function getAllMusic() {
    let tbody = document.getElementById("table-content");
    tbody.innerHTML = "";

    let transaction = db.transaction(["music"], "readonly");
    let store = transaction.objectStore("music");
    let cursor = store.openCursor();

    cursor.onsuccess = function(event) {
        let data = event.target.result;
        if (data) {
            let music = data.value;
            tbody.innerHTML += `
                <tr>
                    <td>${music.id}</td>
                    <td>${music.title}</td>
                    <td>${music.artist}</td>
                    <td>${music.year}</td>
                    <td>
                        <button onclick='deleteMusic(${music.id})'>Löschen</button>
                        <button onclick='getMusic(${music.id})'>Bearbeiten</button>
                    </td>
                </tr>
            `;
            data.continue();
        }
    }

    cursor.onerror = function(event) {
        console.error("Fehler beim Abrufen der Musik:", event);
    }
}

function deleteMusic(id) {
    let transaction = db.transaction(["music"], "readwrite");
    let store = transaction.objectStore("music");
    let request = store.delete(id);

    request.onsuccess = function(event) {
        console.log("Musik erfolgreich gelöscht");
        getAllMusic();
    }

    request.onerror = function(event) {
        console.error("Fehler beim Löschen der Musik:", event);
    }
}

function getMusic(id) {
    let transaction = db.transaction(["music"], "readonly");
    let store = transaction.objectStore("music");
    let request = store.get(id);

    request.onsuccess = function(event) {
        let music = event.target.result;
        updateMusic(music);
    }

    request.onerror = function(event) {
        console.error("Fehler beim Laden der Musik:", event);
    }
}

function updateMusic(music) {
    // Füllen Sie die Formulardaten aus
    document.getElementById("title").value = music.title;
    document.getElementById("artist").value = music.artist;
    document.getElementById("year").value = music.year;

    // Speichern Sie die aktualisierten Daten
    document.getElementById("btn_save_data").onclick = function() {
        music.title = document.getElementById("title").value;
        music.artist = document.getElementById("artist").value;
        music.year = parseInt(document.getElementById("year").value);

        let transaction = db.transaction(["music"], "readwrite");
        let store = transaction.objectStore("music");
        let request = store.put(music);

        request.onsuccess = function(event) {
            console.log("Musik erfolgreich aktualisiert");
            resetInputs();
            getAllMusic();
        }

        request.onerror = function(event) {
            console.error("Fehler beim Aktualisieren der Musik:", event);
        }

        // Setzen Sie den Click-Handler zurück
        document.getElementById("btn_save_data").onclick = addMusic;
    }
}

function resetInputs() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("year").value = "";
}
