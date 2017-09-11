
    var frame;
    try {
        frame = window.frameElement;

    }catch(e) {
        console.error("can not access parent. Listing template");
    }
    if(!frame){
        var dummy = document.createElement("div");
        document.body.appendChild(dummy);
        frame = dummy;
    }


    frame.style.display = "none";

    var template = '<a href="%%url%%" target="_blank" class="listing-ad"><article class="box-row-wrapper" style="background-color:#fff476;text-align: left; margin-left:15px; margin-right:15px;"><div class="box-row"> <div class="box-row-item box-row-item--sm-4 box-row-item--md-3 box-row-item--image"> <div class="item-content"> <div class="box-row-item-shadow"></div><div class="item-content-label ad-price-label" style="display:none"> <span>%%price%%</span></div><img src="%%image%%" alt="Traumhaftes Apartment im Zürich" /> </div> </div> <div class="box-row-item box-row-item--sm-4 box-row-item--md-3 box-row-item--bottom-line-sm box-row-item--attributes"> <!-- result-item-attributes --> <div class="item-content"> <ul class="box-row-item-attribute-list list--attributed list--flat ad-keyfacts-list"> </ul> </div> </div> <div class="box-row-item box-row-item--md-3 box-row-item--sm-4 box-row-item--tooltip"> <div class="item-content item-content--tooltip"> <p class="item-title item-title--street">%%headline1%%</p> <p class="item-description"> %%description1%% </p> <div class="box-row-item-shortcuts"> </div> </div> </div> <div class="box-row-item box-row-item--md-3 box-row-item--show-md box-row-item--details"> <div class="item-content"> <h2 class="item-title">%%headline2%%</h2> <p class="item-description">%%description2%%</p> <div class="item-content-agency ad-logo" style="display:none"> <img src="%%logo%%" alt="ad logo" /> </div> <div class="item-content-agent-recommendation"> </div> </div> </div> </div></article></a>';
    var styles = ".ad-container .listing-ad {color:#505050}";

    appendStyleToHead();

    var regex;
    for(var key in templateVars){
        if(templateVars.hasOwnProperty(key)){
            regex = new RegExp("%%"+key+"%%","g");
            template = template.replace(regex,templateVars[key]);
        }
    }
    template = stringToHTML(template)[0];

    //append listings
    var list = template.getElementsByClassName("ad-keyfacts-list")[0];

    if(templateVars.price !== ""){
        var price = template.getElementsByClassName("ad-price-label")[0];
        price.style.display = "block";
    }

    if(templateVars.logo !== ""){
        var price = template.getElementsByClassName("ad-logo")[0];
        price.style.display = "block";
    }

    var li;
    var spanKey;
    var spanVal;

    for(var i=0; i<templateVars.listingKeys.length; i++){
        if(templateVars.listingKeys !== ""){
            li = document.createElement("li");
            spanKey = document.createElement("span");
            spanKey.className = "key";
            spanVal = document.createElement("span");
            spanVal.className = "value";
            spanKey.innerText = templateVars.listingKeys[i];
            spanVal.innerText = templateVars.listingVals[i];
            li.appendChild(spanKey);
            li.appendChild(spanVal);
            list.appendChild(li);
        }
    }


    frame.parentElement.appendChild(template);


function stringToHTML(str){
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.childNodes;
}

function appendStyleToHead(){
    var styleID = "homegate_contentad_listing";
    if(window.top){
        try{
            if(!window.top.document.getElementById(styleID) ||  window.top.document.getElementById(styleID).length === 0){
                var style = document.createElement("style");
                style.type = 'text/css';
                style.id = styleID;
                if (style.styleSheet){
                    style.styleSheet.cssText = styles;
                } else {
                    style.appendChild(document.createTextNode(styles));
                }
                window.top.document.head.appendChild(style);
            }
        }catch(e){}
    }
}