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