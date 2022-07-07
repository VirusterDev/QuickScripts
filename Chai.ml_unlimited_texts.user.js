// ==UserScript==
// @name         Chai.ml unlimited texts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On default, you are only allowed to send 100 messages a day. Now, it is endless!
// @author       You
// @match        https://chai.ml/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chai.ml
// @grant        none
// ==/UserScript==
setInterval(() => {
window.localStorage.setItem('firebase:host:chai-959f8-subscription.firebaseio.com', '#virus')
},5000)
