var template = '<div class="blurWrapper"></div><a href="%%url%%" class="wrapper"><div class="content"><h2 class="headline">%%headline%%</h2><p class="description">%%description%%</p><span class="cta">%%cta%%</span></div></a>';
var styles = '  @font-face { font-family: "fakt-regular"; src: url("https://s3-eu-west-1.amazonaws.com/media.das.tamedia.ch/font/fakt-regular.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/media.das.tamedia.ch/font/fakt-regular.woff") format("woff"); font-weight: normal; font-style: normal; text-rendering: auto; } @font-face { font-family: "fakt-bold"; src: url("https://s3-eu-west-1.amazonaws.com/media.das.tamedia.ch/font/fakt-bold.woff2") format("woff2"), url("https://s3-eu-west-1.amazonaws.com/media.das.tamedia.ch/font/fakt-bold.woff") format("woff"); font-weight: normal; font-style: normal; text-rendering: optimizeLegibility; } body,html{ height: 100%; width: 100%; margin: 0; } body{ position: relative; height: 50%; } .blurWrapper{ background-image: url("%%image%%"); background-position: center center; background-repeat: no-repeat; background-size: 100% auto; width: 100%; height: 100%; top: 0; left:0; position: absolute; -webkit-filter: blur(10px); -moz-filter: blur(10px); -o-filter: blur(10px); -ms-filter: blur(10px); filter: blur(10px); } .wrapper { background-image: url("%%image%%"); width: 100%; height: 100%; display: block; background-position: center center; background-repeat: no-repeat; position: relative; background-size: auto 100%; } .portrait .wrapper{ background-position: top center; background-size: auto 125%; } .content h2{ margin: 0; font-family: "fakt-bold", Arial, sans-serif; font-size : 22px; -ms-word-break: break-all; word-break: break-all; /* Non standard for webkit */ word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; -ms-hyphens: auto; hyphens: auto; } .content p{ margin: 0.5em 0; } .content{ font-family: "fakt-regular", Arial, sans-serif; box-sizing: border-box; text-align: left; padding: 15px; bottom: 0px; position: absolute; width: 100%; color: white; background: -moz-linear-gradient(top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,1) 100%); /* FF3.6-15 */ background: -webkit-linear-gradient(top, rgba(0,0,0,0.2) 0%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */ background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=""#33000000"", endColorstr=""#000000"",GradientType=0 ); /* IE6-9 */ } span{ padding: 5px; border: 1px solid white; position: relative; float: right; } ';

//set body to 60% of screen
if(window.screen){
    document.body.style.height = window.screen.height * 0.6 + "px";
}
else if(mraid && mraid.getScreenSize){
    document.body.style.height = mraid.getScreenSize() * 0.6 + "px";
}
else{
    document.body.style.height = "430px";
}
//trigger resize for resizing refresh
window.dispatchEvent(new Event('resize'));


//check if the background image is horizontal or vertical
if(templateVars.image){
    var bgImg = new Image();
    bgImg.src = templateVars.image;
    bgImg.style.opacity ="0";
    bgImg.style.position ="absolute";

    bgImg.onload = function(){
        if(bgImg.offsetHeight > bgImg.offsetWidth){
            document.body.className +=" portrait";
        }
        document.body.removeChild(bgImg);
    };
    document.body.appendChild(bgImg);
}



var regex;
for(var key in templateVars){
    if(templateVars.hasOwnProperty(key)){
        regex = new RegExp("%%"+key+"%%","g");
        template = template.replace(regex,templateVars[key]);
        styles = styles.replace(regex,templateVars[key]);
    }
}
appendStyleToHead();
template = stringToHTML(template);
document.body.appendChild(template[0]);
document.body.appendChild(template[0]);
function stringToHTML(str){
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.childNodes;
}
function appendStyleToHead(){
    var styleID = "homegate_contentad_listing";
        try{
            if(!document.getElementById(styleID)){
                var style = document.createElement("style");
                style.type = 'text/css';
                style.id = styleID;
                if (style.styleSheet){
                    style.styleSheet.cssText = styles;
                } else {
                    style.appendChild(document.createTextNode(styles));
                }
                document.head.appendChild(style);
            }
        }catch(e){}
}



