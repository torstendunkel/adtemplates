


var template = '<style> #container { background : url("[%Image%]"); background-size: cover; background-repeat:no-repeat; width: 100%; height: 100%; max-height:1000px; max-width: 500px; display: flex; flex-direction: column; justify-content: center; transform: scale(1); cursor: pointer; } #container.anim{ transition: all .2s ease-in-out; } #container.small { transform: scale(0.5); } video{ width: 100%; max-width:500px; } body{ display: flex; flex-direction: column; justify-content: center; } body,html{ width:100%; height:100%; margin:0px; } #container.hidden, #closeBtn hidden{ display: none; } #closeBtn{ width: 30px; position: absolute; top: 8px; right: 8px; cursor: pointer; } #closeBtn g{ stroke: white; fill: white; } #mutedBtn{ stroke: white; fill: white; stroke-width: 0px; position: fixed; left:8px; top: 65%; } .muted #vol1, .muted #vol2, .muted #vol3{ display: none; } .unmuted #volMuted{ display:none; } </style><div id="container" class="hidden small"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="closeBtn" x="0px" y="0px" viewBox="0 0 384.97 384.97" xml:space="preserve"> <g> <path d="M360.909,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848 c13.281,0,24.061-10.767,24.061-24.061V24.061C384.97,10.767,374.191,0,360.909,0z M360.909,360.909H24.061V24.061h336.848 V360.909z"></path> <path d="M111.533,273.172c4.74,4.692,12.439,4.692,17.191,0l64.049-63.52l63.472,63.472c4.74,4.752,12.439,4.752,17.179,0 s4.74-12.475,0-17.227l-63.376-63.388l63.015-62.497c4.74-4.704,4.74-12.319,0-17.011c-4.74-4.704-12.439-4.704-17.179,0 l-62.931,62.413l-63.869-63.881c-4.74-4.752-12.439-4.752-17.179,0c-4.74,4.764-4.74,12.475,0,17.227l63.773,63.785 l-64.134,63.604C106.793,260.853,106.793,268.48,111.533,273.172z"></path> </g> </svg> <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" class="muted" id="mutedBtn"> <g> <g> <path stroke="null" d="m14.90822,4.89683c-0.1951,0 -0.3902,0.04645 -0.53885,0.14865l-8.82606,4.38516l-4.23651,0c-0.73396,0 -1.31927,0.58531 -1.31927,1.31927l0,9.11407c0,0.67822 0.58531,1.26352 1.31927,1.26352l4.23651,0l8.82606,4.43161c0.82686,0.43666 1.84883,-0.1951 1.84883,-1.17062l0,-18.1817c0.00929,-0.72467 -0.57602,-1.30998 -1.30998,-1.30998l0,0.00001l0,0.00001zm-1.26352,17.40129l-7.21879,-3.60475c-0.1951,-0.0929 -0.3902,-0.14865 -0.58531,-0.14865l-3.27029,0l0,-6.48484l3.27958,0c0.1951,0 0.3902,-0.04645 0.58531,-0.14865l7.20951,-3.60475l0,13.99164l0,-0.00001l-0.00001,0.00001z" id="svg_2"/> <path stroke="null" id="volMuted" d="m29.47588,18.94422l0,0l-3.61405,-3.63262l3.62333,-3.62333c0.87332,-0.82686 0.24156,-2.23903 -0.92905,-2.23903c-0.34375,0.04645 -0.67822,0.14865 -0.87332,0.3902l-3.64192,3.66049l-3.64192,-3.66049c-0.24156,-0.24156 -0.58531,-0.3902 -0.92905,-0.3902c-1.17062,0 -1.75593,1.41217 -0.92905,2.23903l3.66049,3.64192l-3.60475,3.62333c-1.31927,1.21707 0.58531,3.07519 1.80237,1.80237l3.61405,-3.61405l3.63262,3.61405c1.24494,1.25423 3.09377,-0.5946 1.83025,-1.81166l-0.00001,0l0,-0.00001l0.00001,0z"/> <path stroke="null" d="m20.57584,10.97377l0,0c-0.65949,0 -1.18541,0.63054 -1.18541,1.42122l0,4.88418c0,1.89162 2.37081,1.89162 2.37081,0l0,-4.88418c0,-0.79068 -0.52592,-1.48127 -1.18541,-1.42122l0.00001,0z" id="vol1"/> <path stroke="null" d="m24.64964,8.50166c-0.65949,0 -1.18541,0.63054 -1.14366,1.42122l0,9.8184c-0.04174,1.89162 2.37081,1.89162 2.32072,0l0,-9.8184c0.00835,-0.79068 -0.51757,-1.42122 -1.17706,-1.42122z" id="vol2"/> <path stroke="null" d="m28.73176,6.02954c-0.61774,0.05004 -1.14366,0.68058 -1.14366,1.42122l0,14.70259c-0.04174,1.89162 2.37081,1.89162 2.32072,0l0,-14.70259c0.05009,-0.79068 -0.51757,-1.42122 -1.17706,-1.42122z" id="vol3"/> </g> </g> </svg> <video id="vid" muted src="[%Video%]" autoplay="autoplay" loop="loop"></video> </div>';

var regex;
for(var key in templateVars){
    if(templateVars.hasOwnProperty(key)){
        regex = new RegExp("\\[%"+key+"%\\]","g");
        template = template.replace(regex,templateVars[key]);
    }
}
template = stringToHTML(template);

while(template.length > 0){
    document.body.appendChild(template[0]);
}


function stringToHTML(str){
    var div = document.createElement('div');
    div.innerHTML = str;
    return div.childNodes;
}


var SideBar = function(){
    this.init();
};


SideBar.prototype = {
    init : function(){
        this.clickThroughUrl = templateVars.Url;
        this.bgImageSrc = templateVars.Image;
        this.container = document.getElementById("container");
        this.video = document.getElementById("vid");

        this.animClass = "anim";
        this.hiddenClass = "hidden";
        this.smallClass = "small";
        this.closeBtn = document.getElementById("closeBtn");
        this.muteBtn = document.getElementById("mutedBtn");

        this.totmConnect = window.connector;

        this.margin = 20;

        var _this = this;
        this.preloadRessources(function(){
            _this.handleResize();
            _this.startAnimation();
            _this.bindUIEvents();
        });
    },


    startAnimation: function(){
        var _this = this;
        _this.container.className = _this.container.className.replace(_this.hiddenClass,_this.animClass);
        window.setTimeout(function(){
            _this.container.className = _this.container.className.replace(_this.smallClass,"");
            _this.container.addEventListener("transitionend", function(){
                _this.container.className = _this.container.className.replace(_this.animClass,"");
            }, false);
        },100);
    },


    preloadRessources: function(cb){
        var _this = this;
        _this.bgImage = new Image();
        _this.bgImage.src = _this.bgImageSrc;

        _this.bgImage.onload = function(){
            _this.vh = _this.bgImage.width/_this.bgImage.height;
            cb.call(_this);
        }

    },

    bindUIEvents: function(){
        var _this = this;
        this.resizeFnc = this.handleResize.bind(this);
        window.addEventListener("resize",this.resizeFnc);

        _this.closeBtn.addEventListener("click",function(e){
            e.stopPropagation();
            _this.handleClose();
        },false);

        _this.container.addEventListener("click",function(){
            _this.handleElemClicked();
        },false);

        _this.muteBtn.addEventListener("click",function(e){
            e.stopPropagation();
            _this.setVideoMute();
        },false);
    },

    handleClose: function(){
        window.removeEventListener("resize",this.resizeFnc);
        this.closeBtn.style.display = "none";
        this.margin = 0;
        if(this.totmConnect){
            this.totmConnect.pushDataToTOTM({
                decreaseIframe : true
            });
        }
        this.handleResize();
    },

    handleElemClicked: function(){
        this.setVideoMute(true);
        window.open(this.clickThroughUrl, "target=_blank");
    },

    setVideoMute: function(state){
        if(!state){
            state = !this.video.muted;
        }
        this.video.muted = state;

        if(state){
            this.muteBtn.setAttribute("class","muted");
        }else{
            this.muteBtn.setAttribute("class","unmuted");
        }

    },

    handleResize: function(){

        var areaHeight = window.innerHeight;
        var areaWidth = window.innerWidth;

        areaHeight = areaHeight -  this.margin;
        areaWidth = areaWidth -  this.margin;

        var imageWidth;
        var imageHeight;

        if (this.vh >= 1) { // landscape
            imageWidth = areaWidth;
            imageHeight = imageWidth / this.vh;
            if (imageHeight > areaHeight) {
                imageHeight = areaHeight;
                imageWidth = areaHeight * this.vh;
            }
        } else { // portrait
            imageHeight = areaHeight;
            imageWidth = imageHeight * this.vh;
            if (imageWidth > areaWidth) {
                imageWidth = areaWidth;
                imageHeight = areaWidth / this.vh;
            }
        }

        this.container.style.maxWidth =  imageWidth + "px";
        this.container.style.maxHeight = imageHeight + "px";
        this.container.style.margin = this.margin/2 + "px";
        this.video.style.maxWidth = imageWidth + "px";
    }
};

function expandReady(status){
    window.sidebar = new SideBar();
}

if(window === top.window){
    expandReady();
}
