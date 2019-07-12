const electron = require('electron');

window.onload = function() {
    console.log('init');
    const webview = document.getElementById("foo");
    const indicator = document.querySelector(".indicator");

    const loadstart = function() {
        indicator.innerText = "loading...";
    }
    const loadstop = function() {
        indicator.innerText = "";
    }

    webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);
    webview.addEventListener("dom-ready", function() {
        // webview.openDevTools();
        console.log(webview.getTitle());
        // alert('hello');
        document.title = webview.getTitle();
    });
}
