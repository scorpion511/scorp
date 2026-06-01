// SCORPION ENGINE - SYNCHRONOUS MEMORY INJECTOR
// This script maps the raw binary array into live browser components instantly
(function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'goldhen_24b1810.bin', false); // "false" forces the loop to wait!
    request.send(null);

    if (request.status === 200) {
        var buffer = request.response;
        var uint8 = new Uint8Array(buffer || request.responseText.split('').map(c => c.charCodeAt(0)));

        window.payload = Array.from(uint8);
        console.log("[Scorp Engine] GoldHEN 18.10 locked into memory variables successfully.");
    } else {
        console.error("[Scorp Engine] Target payload file extraction failed!");
    }
})();
