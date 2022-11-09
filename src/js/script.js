/**
 * Placing the footer credits at the bottom div of the page
 */
let footercreds = document.getElementById("footer-creds");
footercreds.textContent =
  "A website by Anders Kristensen and Thomas Engum | Copyright @ " +
  new Date().getFullYear();


  /**
   * runs the scrollfunction when user is scrolling
   */
window.onscroll = function () {
  scrollFunction();
};

/**
 * Checks if the user is is scrolled to the top or not, if so, it sets the background
 * to transparent.
 */
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "#161616";
    document.getElementById("navbar").style.borderColor = "transparent";
    document.getElementById("navbar").style.borderColor = "#BD4848";
  } else {
    document.getElementById("navbar").style.transition = "300ms ease-out";
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
};

/**
 * Fetches the data from the form and uses the validation function to check the input.
 * 
 * If its invalid, it sets the border-color to red, if its OK it sets it to green.
 * 
 * It then prints the user info in the console and sends feedback to the user
 */
const formValidation = () => {
  let name = document.forms["contact-form"]["fname"].value;
  let phone = document.forms["contact-form"]["phone"].value;
  let mail = document.forms["contact-form"]["mail"].value;
  let message = document.forms["contact-form"]["request"].value;
  if (!name_validator(name)) {
    document.getElementById("fname").style = "border:1.2px solid red;";
  } 
  else{
    document.getElementById("fname").style = "border:1.2px solid green;";
  }
  
  if (!phone_validator(phone)) {
    document.getElementById("phone").style = "border:1.2px solid red;";
  }
  else{
    document.getElementById("phone").style = "border:1.2px solid green;";
  }
  
  if (!mail_validator(mail)) {
    document.getElementById("mail").style = "border:1.2px solid red;";
  } 
  else{
    document.getElementById("mail").style = "border:1.2px solid green;";
  }
  
  if (name_validator(name) && phone_validator(phone) && mail_validator(mail)){
    console.log("Name: "+name+"\n"+
                "Phone: "+phone+"\n"+
                "Mail: "+mail+"\n\n"+
                "Message: "+message);
    document.getElementById("fname").style = "border:0";
    document.getElementById("phone").style = "border:0";
    document.getElementById("mail").style = "border:0";
    
    message_sent();
    
  }

};

/**
 * Uses basic RegEx to check if name-parameter only uses alphabetic chars
 * 
 * @param name
 * 
 * @returns true or false depending on the input
 */
const name_validator = (name) => {
  return /^[a-zA-Z]+$/.test(name);
};

/**
 * Check if length and chars are legal for a phone number 
 * 
 * @param phone 
 * @returns  true or false depending on the input
 */
const phone_validator = (phone) => {
  return phone.length === 8 && /^\d+$/.test(phone);
};

/** RegEx checking from https://stackabuse.com/validate-email-addresses-with-regular-expressions-in-javascript/
 * 
 * @param email 
 * @returns if mail is valid or not
 */
const mail_validator = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * Animation functions that will change the css-classes for the button and feedback when
 * sending a valid form
 */
async function message_sent() {
  let button = document.getElementById("send-msg");
  let confirmation = document.getElementById("send-msg-confirmed");

  document.getElementById("contact-form").reset();
  document.getElementById("msg").value = "";

  button.style.display = "none";
  confirmation.style.display = "block";
  await new Promise((r) => setTimeout(r, 2000));
  confirmation.style.animation = "slide-out 1s, fade-out 1s";
  await new Promise((r) => setTimeout(r, 700));
  button.style.display = "block";
  button.style.animation = "fade-in 1s";
  confirmation.style.display = "None";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Countdown timer for the event that uses the Date()-object and basic arithmetic
 * equations to calculate days, hours, minutes and seconds
 */
const counter = () => {
    var countDownDate = new Date("Nov 21, 2022 23:59:59").getTime();
    var now = new Date().getTime()

    var delta = countDownDate - now;

    var days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (delta < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "Welcome!";
    }
}

/**
 * Thid function activates a timer which will run every second. This is supposed to only work
 * on the index file, and will read the filename to check if its going to run or not.
 */
const timer = setInterval(() => {
  if(window.location.pathname.split("/").pop().split(".")[0] == "index"){
    counter();
  }
  else{clearInterval(timer)};
}, 1000);
