document.addEventListener('alpine:init',()=>{Alpine.store("api",{serviceListEndpoint:"data/serviceList.json",serviceListEndpointData:null,announcementListEndpoint:"data/announcementList.json",announcementListEndpointData:null,init(){fetch(Alpine.store("api").serviceListEndpoint).then(response=>response.json()).then(data=>this.serviceListEndpointData=data)
fetch(Alpine.store("api").announcementListEndpoint).then(response=>response.json()).then(data=>this.announcementListEndpointData=data)
Alpine.effect(()=>{console.log(Alpine.store("siteData").darkMode)})},})})
document.addEventListener('alpine:initialized',()=>{})
function countStatisticsToErrorLevel(counts){if(counts.down==counts.total){return 0;}
if(counts.down==0){return 1;}
if(counts.down==counts.total-counts.disabled){return 3;}
return 2;}
function countStatisticsToColorClass(counts){level=countStatisticsToErrorLevel(counts);return["is-grey","is-success","is-warning","is-error"][level]}
function countStatisticsToStatusMessage(counts){level=countStatisticsToErrorLevel(counts);return["No services monitored","All services operational","Some services down","All services down"][level]}
function percentageToColor(percentage){if(percentage<0){return Alpine.store("siteData").darkMode?"#687790":"#68779040"}
if(percentage<95){return "#df484a"}
if(percentage<99){return "#f29030"}
if(percentage<100){return "#3bd671b0"}
return "#3bd671"}
function generateServiceUptimeChart(dailyStatistics,days){const svgHead=`<svg width="530" height="15" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 530 15">`;let result=svgHead;const gap=5.9;for(let i=0;i<90;i++){percentage=dailyStatistics[89-i]
let color
Alpine.effect(()=>{color=percentageToColor(percentage*100)})
result+=`<rect 
            height="15" 
            width="3.25" 
            x="${i*gap}" 
            y="0" 
            fill="${color}" 
            fill-opacity="1" 
            rx="1.625"
            ry="1.625"
            uk-tooltip="<div class='uk-text-muted font-12'>${days[89-i]}</div>${toPercent(percentage)}" 
            aria-expanded="false"
        >
        </rect>`}
return result}
function announcementTypeToIconName(announcementType){switch(announcementType.toLocaleLowerCase()){case "information":return "info"
case "warning":return "tool"
case "alert":return "alert-triangle"}}
function generateAnnouncementIcon(announcementType){return `<use xlink:href="static/img/symbol-defs.svg#icon-${announcementTypeToIconName(announcementType)}"></use>`}