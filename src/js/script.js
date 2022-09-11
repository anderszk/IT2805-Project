window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("navbar").style.backgroundColor= "#161616";
        document.getElementById("navbar").style.borderColor= "transparent";
        document.getElementById("navbar").style.borderColor= "#BD4848";
    } else {
        document.getElementById("navbar").style.transition= "300ms ease-out";
        document.getElementById("navbar").style.backgroundColor= "transparent";
    }
}