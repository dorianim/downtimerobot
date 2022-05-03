document.addEventListener('alpine:init',()=>{console.log("Downtimerobot is initing")
Alpine.data('loadable',(endpoint)=>({_endpoint:endpoint,data:null,init(){Alpine.effect(()=>{this.data=Alpine.store("api")[`${this._endpoint}EndpointData`]})}}))
Alpine.store("siteData",{loaded:false,data:null,darkMode:true,fullscreen:false,toggleDarkMode(){this.setDarkMode(!this.darkMode)},setDarkMode(darkMode){this.darkMode=darkMode
if(this.darkMode){document.getElementsByTagName("html")[0].classList.add("dark")}
else{document.getElementsByTagName("html")[0].classList.remove("dark")}},toggleFullscreen(){this.setFullscreen(!this.fullscreen)},setFullscreen(fullscreen){this.fullscreen=fullscreen
if(fullscreen){enterFullscreen();}
else{exitFullscreen();}}})
updateDarkMode()})
document.addEventListener('alpine:initialized',()=>{console.log("Downtimerobot is starting")})
function toPercent(num){if(num<0){return "N/A"}
num=num*100
return num.toFixed(2)+"%"}
function updateDarkMode(){window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',event=>{Alpine.store("siteData").setDarkMode(event.matches);});Alpine.store("siteData").setDarkMode(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)}
function enterFullscreen(){const elem=document.documentElement;if(elem.requestFullscreen){elem.requestFullscreen();}else if(elem.mozRequestFullScreen){elem.mozRequestFullScreen();}else if(elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();}else if(elem.msRequestFullscreen){elem.msRequestFullscreen();}
window.scrollTo(0,0);}
function exitFullscreen(){if(document.exitFullscreen){document.exitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}}