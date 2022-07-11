// ==UserScript==
// @name         MooMoo.io Auto reload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically reloads the page when you crash or disconnect.
// @author       Viruster#2811
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
setInterval(()=>{
    window.onbeforeunload = null;
    var text = document.getElementById("loadingText").innerText;
    if (text.includes('reload')) {
        document.body.remove();
        window.location.href = window.location.href;
    }
}, 100);
})();
