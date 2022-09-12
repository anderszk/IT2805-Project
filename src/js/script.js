window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor= "#161616";
        document.getElementById("navbar").style.borderColor= "transparent";
        document.getElementById("navbar").style.borderColor= "#BD4848";
    } else {
        document.getElementById("navbar").style.transition= "300ms ease-out";
        document.getElementById("navbar").style.backgroundColor= "transparent";
    }
}

function formValidation() {
    let name = document.forms["contact-form"]["fname"].value;
    let phone = document.forms["contact-form"]["phone"].value;
    let mail = document.forms["contact-form"]["mail"].value
    if (!name_validator()) {
        
    }
    else if (!phone_validator()) {

    }
    else if (!mail_validator()) {

    }
    else{return;} //else submit form
}

function name_validator(name) {
    //only char
}

function phone_validator(phone) {
    //length 8 only char
}

function mail_validator(mail) {
    //right .com and have @
}