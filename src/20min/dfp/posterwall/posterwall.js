var containerTop = 0;
var containerLeft = 0;
var adunitid = "";
var outsideRight = null;

var totmConfigs = {
    refresh: false,
    addStyle: posterWallStyling.initialStyle
};

var c = document.createElement("script");
c.src = "https://tdn.da-services.ch/libs/totmConnect.js";
c.onload = function () {
    // passes document parameter on subscribe and on resize
    connector.on("connect", function (data) {
        containerTop = data.data.position.top;
        containerLeft = data.data.position.left;
        adunitid = data.data.slot.tatmContainerId;

        connector.pushDataToTOTM(totmConfigs);
    });


// passes scroll parameter on subscribe and on scroll
    connector.on("scroll", function (data) {
        if (containerTop - data.scrollTop <= 0 && containerTop !== 0) {
            if (outsideRight) {
                outsideRight.document.body.style.cssText = "opacity: 1; transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out;";
            }
        }
        else {
            if (outsideRight) {
                outsideRight.document.body.style.cssText = "opacity: 0; transition: opacity .25s ease-in-out; -moz-transition: opacity .25s ease-in-out; -webkit-transition: opacity .25s ease-in-out;";
            }

        }
    });
};
document.body.appendChild(c);


var findOutsideRight = setInterval(function () {
    for (var i = 0; i < top.frames.length; i++) {
        try {
            if (top.frames[i].slotPos === "outsideRight") {
                outsideRight = top.frames[i];
                clearInterval(findOutsideRight);
            }
        }
        catch (e) {
            //errors are expected because cross domain iframes
            // console.log(e)
        }
    }
}, 50);