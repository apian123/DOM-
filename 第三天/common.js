function my$(id){
    return document.getElementById(id);  //id选择对象
}

//innerText和textContent不同浏览器兼容代码
function setinnerText(element,text){
    if(typeof element.textContent=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
function getinnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else {
        return element.textContent;
    }

}

//为任意的元素绑定任意的事件，任意的元素，事件的类型，事件处理函数
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
       element["on"+type]=fn;
    }

}

//解绑事件兼容代码
function removeEventListener(element,type,fnName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}