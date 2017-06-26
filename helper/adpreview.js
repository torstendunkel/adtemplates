

var template =
                '<div id="swaggerBox" style="position:fixed; top:31px; left:0; width:200px; height: 50px; background:lightblue; z-index:10000; text-align: center;padding:10px">'+
                ''+
                ''+
                '<span style="float:left" >Adpreview</span>'+
                '<input id="apre" type="text" value="" style="width:50%">'+
                '<br><input id="arReload" type="checkbox"> autoreload '+
                '<input type="button" value="refresh" onclick="checkReload(document.getElementById(\'apre\').value);return false;"></button>'+
                '</div>';


var domNodeToRemove = ["adspot_sitebar_container"];

var interval;

function reloadAds(adpreview,first){

    cleanUp();

    if(first){
        adpreview = prompt("Adpreview eingeben:");
    }
    TATM.pageTargeting.adpreview = adpreview;

    googletag.pubads().clear(TATM.gptadslots);
    for (var i = TATM.gptadslots.length - 1; i >= 0; i--) {
        if (document.getElementById(TATM.gptadslots[i].getSlotElementId()) !== null) {
            document.getElementById(TATM.gptadslots[i].getSlotElementId()).parentElement.style.display = "";
        }
    }
    TATM.helper.registerTargetingsToGpt();
    googletag.pubads().refresh();

    document.getElementById("apre").value = adpreview;


}

function checkReload(adpreview){
    clearInterval(interval);
    var ar = document.getElementById("arReload");
    reloadAds(adpreview);
    if(ar.checked === true){
        interval = setInterval(function(){
            reloadAds(adpreview);
        },10000);
    }
}

function renderBox(){

    var box = document.getElementById("swaggerBox");
    if(!box){
        document.body.appendChild(createDomNodeFromHTML(template)[0]);
    }

}


function createDomNodeFromHTML(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.childNodes;
}


function cleanUp(){
    for(var i=0;i<domNodeToRemove.length; i++){
        var child = document.getElementById(domNodeToRemove[i]);
        if(child){
            var parent = child.parentNode;
            parent.removeChild(child);
        }
    }
};


renderBox();
reloadAds(null,true);







/*
<a style="cursor: pointer;" href="javascript:(function()%7Bvar s=document.createElement('script');s.src='https://s3-eu-west-1.amazonaws.com/media.das.tamedia.ch/scripts/adpreview_bookmarklet/adpreview.js';document.getElementsByTagName('head')[0].appendChild(s);%7D)()"> Swag Reloader</a>
*/

