// ==UserScript==
// @name         Discord - Message logger
// @namespace    http://tampermonkey.net/
// @version      V.1.4
// @description  Press 'space' to log the last message || Press 'esc' to toggle the menu || Do not copy || By Viruster#2811, don't be shy to friend me
// @author       Viruster#2811
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var virus = {
        functions:{
copy: (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
        }
        },
     styles:{
logmenu:'position:fixed; top:0%; right:0%; left:0%; bottom:0%; background-color:black; width:400px; height:500px; z-index:999999999999999999999999;',
log:'width:400px; height:400px; background-color:black; margin-top:55px; overflow:auto;',
head:'color:#88f; text-align:center; font-size:30px;',
logtext:'color:red; text-align:center;'
     },
        texts:{
         head:'Virus message log V.1.4'
        }
    }
function c(elem){
return document.createElement(elem)
}
    function a(elem){
top.document.body.appendChild(elem)
    }
    function lma(elem){
logmenu.appendChild(elem)
    }
    function la (elem){
log.appendChild(elem)
    }
    function logmsg(msg){
var text = c('p')
text.style = virus.styles.logtext
text.innerHTML = msg
la(text)
    }
    var logmenu = c('div')
    logmenu.style = virus.styles.logmenu
    a(logmenu)

    var head = c('p')
    head.style = virus.styles.head
    head.innerText = virus.texts.head
    lma(head)
    var log = c('div')
    log.style = virus.styles.log
    lma(log)
    function clearLog(){
log.innerHTML = ''
    }
    document.addEventListener("keydown",function(e){
        if(e.key == 'Escape'){
if(logmenu.style.display == 'none'){
logmenu.style.display = 'block'
}else{
 logmenu.style.display = 'none'
}
        };
if(e.key == ' '){
    clearLog()
    var isReply = false;
    if(document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div").length == 4){
isReply = false;
    }else{
        isReply = true
    }
    if(isReply == false){
    var imgsrc = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[0].querySelector("img").getAttribute("src")
    var specdate = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[1].querySelectorAll("span")[2].querySelector("time").getAttribute('aria-label')
    var date = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[1].querySelectorAll("span")[2].innerText.split('\n')[1]
    var user = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[1].querySelector("span").innerText
    var id = String(document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.id).split("-")[2]
    var msg = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[2].innerText

    let image = `<img src='`+imgsrc+`' style='width:50px; height:50px;'>`;
    logmsg('---Message Log---')
        logmsg("IsReply: " + isReply)
logmsg("Date: " + date)
logmsg("Specific date: " + specdate)
logmsg("ID: " + id)
logmsg("Username: " + user)
logmsg("Message: " + msg)
logmsg("Profile picture: " + image)
logmsg(`<button id='viruscopytoclipboardlol' style='color:red; background-color:black; border:1.5px solid red;'>Copy to clipboard</button>`)
log.querySelector("#viruscopytoclipboardlol").onclick = function(){
virus.functions.copy('Date: ' + date + ' ||  Specific date: ' + specdate + ' ||  ID: ' + id + ' ||  Username: ' + user + ' ||  Message: ' + msg)
}


    logmsg('---End---')
    }else{
     var imgsrc2 = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[0].querySelector("img").getAttribute("src")
    var specdate2 = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[4].querySelector("time").getAttribute("aria-label")
    var date2 = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[4].querySelectorAll("span")[2].innerText.split("\n")[1]
    var user2 = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[1].querySelector("span").innerText
    var id2 = String(document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.id).split("-")[2]
    var msg2 = document.querySelector("[data-list-id='chat-messages']").lastChild.previousSibling.querySelectorAll("div")[5].innerText

    let image2 = `<img src='`+imgsrc2+`' style='width:50px; height:50px;'>`;
    logmsg('---Message Log---')
logmsg("IsReply: " + isReply)
logmsg("Date: " + date2)
logmsg("Specific date: " + specdate2)
logmsg("ID: " + id2)
logmsg("Username: " + user2)
logmsg("Message: " + msg2)
logmsg("Profile picture: " + image2)
logmsg(`<button id='viruscopytoclipboardlol' style='color:red; background-color:black; border:1.5px solid red;'>Copy to clipboard</button>`)
logmsg('---End---')
log.querySelector("#viruscopytoclipboardlol").onclick = function(){
virus.functions.copy('Date: ' + date2 + ' ||  Specific date: ' + specdate2 + ' ||  ID: ' + id2 + ' ||  Username: ' + user2 + ' ||  Message: ' + msg2)
}

    }
    }
    })
})();
