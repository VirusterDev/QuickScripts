// ==UserScript==
// @name         KoGaMa Anti paste prevent
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allows you to paste text into comment boxes.
// @author       You
// @match        https://www.kogama.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kogama.com
// @grant        none
// ==/UserScript==
setInterval(() => {
document.querySelector("#comment").onpaste = function(){console.log("Anti anti paste :P")}
},1000)
