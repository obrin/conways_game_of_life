var Engine=function(n){function t(){var n=Date.now(),i=(n-w)/1e3;e(),f(),c(),w=n,console.log("hello"),h.requestAnimationFrame(t)}function i(){w=Date.now(),t()}function e(){}function o(){}function c(){}function u(){}function f(){d.fillStyle=this.background,d.fillRect(0,0,l.width,l.height)}function a(){}var g=n.document,h=n.window,l=g.getElementById("game"),d=l.getContext("2d"),r=this,w;l.height=800,l.width=800,r.background="grey",i()}(this);