// build time:Thu Aug 24 2017 22:04:14 GMT+0800 (CST)
(function(){var e=function(e){var t=0,o=0;while(e.offsetParent){t+=e.offsetTop;o+=e.offsetLeft;e=e.offsetParent}return{top:t,left:o}};var t=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;if(e>=i){n.style.position="fixed";n.style.top="10px";n.style.width="inherit"}else{n.style.position="static";n.style.width="auto"}};var o=document.querySelector(".toc");if(!o)return;var n=document.querySelector(".widget-toc");var r=n.querySelector(".container");r.appendChild(o.cloneNode(true));n.style.display="block";var i=e(n).top;if(document.addEventListener){document.addEventListener("scroll",t)}})();
//rebuild by neat 