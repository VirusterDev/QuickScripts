// ==UserScript==
// @name         MooMoo.io weird anti lag
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        *://moomoo.io/*
// @match        *://sandbox.moomoo.io/*
// @description  Disables the spinning inside canvas, your hits will be invis, the windmills will be paused and look weird, everything will be weird... but your insta's will be GOD FAST
// @author       Viruster#2811
// @grant        none
// ==/UserScript==
CanvasRenderingContext2D.prototype.rotate = function(){}
