try{
    var el = frameElement;
    var i=0;
    while(i < 10){
        i++;
        el = el.parentElement;
        if(el.className.indexOf("ad-panel") !== -1){
            break;
        }
    }
    el.parentElement.removeChild(el);
}catch(e){}