
var boxClassName = "box--addendum box--white box--padded text--right";
var noBoxClass =  "";
var arrowClass = "icon icon-chevron-right margined--right-half text--rel-85";
var linkClass = 'text--smaller';


var infoSVG = '<label style="cursor: pointer; color:#e63232">&nbsp;<i class="icon icon-info"></i></label>';


var link = document.createElement("a");
link.href = templateVars.url;
link.className = linkClass;
link.target = "_blank";
link.textContent = templateVars.linkText;


var frame;
try{
    frame = window.frameElement;
    frame.style.display = "none";
    var wrapper = document.createElement("div");

    if(templateVars.boxWrapper !== "false"){
        wrapper.className = boxClassName;
    }else if(templateVars.showArrow === "false"){
        wrapper.className = noBoxClass;
    }

    wrapper.appendChild(link);
    if(templateVars.showArrow !== "false"){
        var arr  = document.createElement("i");
        arr.className = arrowClass;
        wrapper.insertBefore(arr, link);
    }

    if(templateVars.impPixel){
        (new Image()).src = templateVars.impPixel;
    }

    if(templateVars.infoText){
      var label = createDomNodeFromHTML(infoSVG)[0];
      label.setAttribute("title",templateVars.infoText);
      wrapper.appendChild(label);
    }

    frame.parentElement.appendChild(wrapper);



}catch(e){
    console.error("something went wrong in textlink template");
}

function createDomNodeFromHTML(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.childNodes;
}