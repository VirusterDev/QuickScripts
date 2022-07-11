// ==UserScript==
// @name         Discord - Anti "X  blocked messages -- Show messages"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the annoying "X  blocked messages -- Show messages" in discord!
// @author       Viruster#2811
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var speed = 10; //Change this if you want, 10 is strongly recomended. The higher you set this, the slower the interval, if it's too fast, and is effecting your discord performance, go ahead and change this number to smth higher.
    setInterval(() => {
        document.querySelectorAll("div").forEach((e) => {
if(e.className.includes("blockedSystemMessage")){
e.parentElement.parentElement.remove()
}
})
    },speed)
})();
