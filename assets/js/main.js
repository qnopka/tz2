function applyTheme(theme) {
    body.className = "";
  document.body.classList.remove("theme-light", "theme-dark", "theme-grey");
  document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".theme").addEventListener("change", function() {
    applyTheme(this.value);
  });
});


let body = document.querySelector("body");
    body.className = "bg-grey";
    goLight = function() {
        body.className = "";
        body.classList.add("theme-light");
    },
goDark = function() {
        body.className = "";
      body.classList.add("theme-dark");
    },
    goGrey = function() {
      body.className = "";
      body.classList.add("theme-grey");
    }

document.querySelector(".theme-light").addEventListener("click", goLight, false);
document.querySelector(".theme-dark").addEventListener("click", goDark, false);
document.querySelector(".theme-grey").addEventListener("click", goGrey, false);


$(function(){
    $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});
