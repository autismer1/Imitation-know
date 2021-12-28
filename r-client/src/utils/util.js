function sleep (time) {
 return new Promise(resolve => setTimeout(resolve, time))
}

function debounce(func, time) {
 let timeOut;
 return function () {
   if (timeOut) clearTimeout(timeOut);
   let callNow = !timeOut;
   timeOut = setTimeout(() => {
     timeOut = null;
   }, time);
   if (callNow) {
     func.apply(this);
   }
 };
}

function throttle (fn, time) {
 let timeout = null
 return function () {
   if (!timeout){
     timeout = setTimeout(() => {
       timeout = null
       fn.apply(this)
     }, time)
   }
 }
}

function pullRefresh () {
 //文档的总高度
 const getScrollTop = () => {
   let scrollTop = 0;
   let bodyScrollTop = 0;
   let documentScrollTop = 0;
   if (document.body) {
     bodyScrollTop = document.body.scrollTop;
   }
   if (document.documentElement) {
     documentScrollTop = document.documentElement.scrollTop;
   }
   scrollTop =
     bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
   return scrollTop;
 };

 //浏览器视口的高度
 const getScrollHeight = () => {
   let scrollHeight = 0;
   let bodyScrollHeight = 0;
   let documentScrollHeight = 0;
   if (document.body) {
     bodyScrollHeight = document.body.scrollHeight;
   }
   if (document.documentElement) {
     documentScrollHeight = document.documentElement.scrollHeight;
   }
   scrollHeight =
     bodyScrollHeight - documentScrollHeight > 0
       ? bodyScrollHeight
       : documentScrollHeight;
   return scrollHeight;
 };

 //浏览器视口的高度
 const getWindowHeight = () => {
   let windowHeight = 0;
   if (document.compatMode === "CSS1Compat") {
     windowHeight = document.documentElement.clientHeight;
   } else {
     windowHeight = document.body.clientHeight;
   }
   return windowHeight;
 };

 return getScrollTop() + getWindowHeight() + 300 >= getScrollHeight()
}

function intercept (content, length) {
 if (!content) {
  return ''
 }
 const newStr = content.substr(0, length)
 return `${newStr}...`
}

export {
 sleep,
 debounce,
 throttle,
 pullRefresh,
 intercept
}