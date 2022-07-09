// ==UserScript==
// @name         Discord - Delete hotkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ctrl + backspace for delete! Must change the "userName" variable to your discord username :)
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
var virus = {
    //Edit this!
    userName: "Viruster",
    //Don't edit anything below this!
    selectID:'',
    getMsg: () => {
document.querySelectorAll(`[aria-roledescription="Message"]`).forEach((e) => {
if(e.querySelector("div").querySelector("span").innerText == virus.userName){
virus.selectID = e.getAttribute("data-list-item-id").split("-")[3]
}
})
    },
    deleteMsg: (id) => {
         window.dispatchEvent(new Event("beforeunload"));const storage=document.body.appendChild(document.createElement("iframe")).contentWindow.localStorage,token=JSON.parse(storage.token);var goal=document.URL.substring(document.URL.lastIndexOf("/")+1,document.URL.length);

        fetch("https://discord.com/api/v9/channels/" + goal + "/messages/" + id, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": token,
  },
  "referrer": "https://discord.com/channels/" + goal,
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "DELETE",
  "mode": "cors",
  "credentials": "include"
});
    }
}
    document.body.addEventListener("keydown",function(e){
if(e.keyCode == 8 && e.ctrlKey == true){
virus.getMsg()
virus.deleteMsg(virus.selectID)
}
    })
})();
