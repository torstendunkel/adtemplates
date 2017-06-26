
// tagi


var css = '@media screen and (max-width: 1626px) and (min-width:1324px){body, html{background-position: calc(100%  + 285px) 0px !important;}}@media screen and (max-width: 1323px){body, html{background-position: -310px 0px !important;}}',
    head = window.parent.document.head || window.parent.document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);



// 20min
var css = '@media screen and (max-width: 1259px){body, html {background-position: -342px 0px !important;}}',
    head = window.parent.document.head || window.parent.document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);