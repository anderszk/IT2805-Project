let footercreds = document.getElementById("footer-creds");
footercreds.textContent = "A website by Anders Kristensen and Thomas Engum | Copyright @ "+new Date().getFullYear();

let ticket_state = "student";

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

async function message_sent(){
    console.log("hello");
    let button = document.getElementById("send-msg");
    let confirmation = document.getElementById("send-msg-confirmed");

    document.getElementById("contact-form").reset();
    document.getElementById("msg").value = "";

    button.style.display = "none";
    confirmation.style.display = "block";
    await new Promise(r => setTimeout(r, 2000));
    confirmation.style.animation= "slide-out 1s, fade-out 1s";
    await new Promise(r => setTimeout(r, 700));
    button.style.display = "block";
    button.style.animation= "fade-in 1s";
    confirmation.style.display = "None";

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function changeTicket(new_ticket){
    let student = document.getElementById("student");
    let adult = document.getElementById("adult");
    let children = document.getElementById("children");
    let partner = document.getElementById("partner");

    var dict = {
        "student": student,
        "adult": adult,
        "children": children,
        "partner": partner
      };

    let animation_timer = 200
    
    dict[ticket_state].style.animation = "ticket-out 500ms";
    await new Promise(r => setTimeout(r, animation_timer));
    dict[ticket_state].style.display = "none";
    dict[new_ticket].style.display = "flex";
    dict[new_ticket].style.animation = "ticket-in 500ms"

    ticket_state = new_ticket;

    


}

function ticketCarousel(){

}


