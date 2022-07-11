// ==UserScript==
// @name         Anti rickroll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  How long can you go without being rickrolled now?
// @author       Viruster#2811
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

    (function() {
    'use strict';
    var virus = {
    useLessBodyVis: () => {
    document.body.style.display = ''},
    rickRollAllowed: false,
    triggers: ['rickroll','prankroll','rickyroll','stickbugged','ricked'],
    checkRickRoll: () => {
    virus.triggers.forEach((trig) => {
    if(document.body.innerHTML.includes(trig)){
    document.body.style.display = 'none'
    setTimeout(() => {
    window.alert("YOU ALMOST GOT RICKROLLED!!!!!")
    var command = prompt('What would you like to do? \n Say 1 to close ' + new URL(document.URL).host + ' or Say 2 to let yourself get rickrolled.')
    if(command == '1'){window.close();
    }else if(command == '2'){
    document.body.style.display = ''
    virus.rickRollAllowed = true;}else{
    alert("Error: unknown command => {\"" + command + "\"};")
    document.body.style.display = ''
    }},500)}})}}
    virus.useLessBodyVis()
    setInterval(() => {
    if(document.body.style.display == '' && virus.rickRollAllowed == false){
    virus.checkRickRoll()}
    },100)
    })();
