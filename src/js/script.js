let footercreds = document.getElementById("footer-creds");
footercreds.textContent =
  "A website by Anders Kristensen and Thomas Engum | Copyright @ " +
  new Date().getFullYear();

window.onscroll = function () {
  scrollFunction();
};

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

const formValidation = () => {
  let name = document.forms["contact-form"]["fname"].value;
  let phone = document.forms["contact-form"]["phone"].value;
  let mail = document.forms["contact-form"]["mail"].value;
  if (!name_validator(name)) {
    console.log("Wrong name");
  } else if (!phone_validator(phone)) {
    console.log("Wrong phone");
  } else if (!mail_validator(mail)) {
    console.log("Wrong mail");
  } else {
    console.log(name, phone, mail);
    message_sent();
  } //else submit form
};

const name_validator = (name) => {
  return /^[a-zA-Z]+$/.test(name);
};

const phone_validator = (phone) => {
  return phone.length === 8 && /^\d+$/.test(phone);
};

const mail_validator = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

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

const timer = setInterval(() => {
  var countDownDate = new Date("Nov 21, 2022 23:59:59").getTime();
  var now = new Date().getTime();

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
}, 1000);

timer();
