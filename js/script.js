(function(t){var a=1e3;var e=t("#totop");var o=500;t(window).scroll(function(){var o=t(document).scrollTop();if(o>a){t(e).stop().fadeTo(300,1)}else{t(e).stop().fadeTo(300,0)}});t(e).click(function(){t("html, body").animate({scrollTop:0},o);return false});var n=t("#search-form-wrap"),r=false,i=200;var s=function(){r=true};var c=function(t){setTimeout(function(){r=false;t&&t()},i)};t("#nav-search-btn").on("click",function(){if(r)return;s();n.addClass("on");c(function(){t(".search-form-input").focus()})});t(".search-form-input").on("blur",function(){s();n.removeClass("on");c()});t("body").on("click",function(){t(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(a){a.stopPropagation();var e=t(this),o=e.attr("data-share"),n=e.offset();if(o=="baidu"){var r=t("#article-share-box");if(r.hasClass("on")){r.removeClass("on");return}t(".article-share-box.on").hide();r.css({top:n.top+25,left:n.left-25}).addClass("on")}else{var i=e.attr("data-url"),s=encodeURIComponent(i),c="article-share-box-"+e.attr("data-id");if(t("#"+c).length){var r=t("#"+c);if(r.hasClass("on")){r.removeClass("on");return}}else{var l=['<div id="'+c+'" class="article-share-box">','<input class="article-share-input" value="'+i+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+s+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+s+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+s+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+s+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join("");var r=t(l);t("body").append(r)}t(".article-share-box.on").hide();r.css({top:n.top+25,left:n.left}).addClass("on")}}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){t(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault();t.stopPropagation();window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")});t(".article-entry").each(function(a){t(this).find("img").each(function(){if(t(this).parent().hasClass("fancybox"))return;var a=this.alt;if(a)t(this).after('<span class="caption">'+a+"</span>");t(this).wrap('<a href="'+this.src+'" title="'+a+'" class="fancybox"></a>')});t(this).find(".fancybox").each(function(){t(this).attr("rel","article"+a)})});if(t.fancybox){t(".fancybox").fancybox()}var l=t("#container"),f=false,h=200;var u=function(){f=true};var p=function(){setTimeout(function(){f=false},h)};t("#main-nav-toggle").on("click",function(){if(f)return;u();l.toggleClass("mobile-nav-on");p()});t("#wrap").on("click",function(){if(f||!l.hasClass("mobile-nav-on"))return;l.removeClass("mobile-nav-on")})})(jQuery);