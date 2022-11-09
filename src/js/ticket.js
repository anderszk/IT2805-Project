let ticket_state = "student";

/**
 * This function is used to both change and simulate the carousel function using 
 * DOM-manipulation with html-content and CSS
 * 
 * @param new_ticket the argument from the user (selected ticket type)
 * @returns None
 */

async function changeTicket(new_ticket) {
  let student = document.getElementById("student");
  let adult = document.getElementById("adult");
  let children = document.getElementById("children");
  let partner = document.getElementById("partner");
  let animation_timer = 200;

  var dict = {
    student: student,
    adult: adult,
    children: children,
    partner: partner,
  };

  if (new_ticket === ticket_state) {
    return;
  }

  document.getElementById(new_ticket + "-btn").className = "ticket-menu-active";
  document.getElementById(ticket_state + "-btn").className =
    "ticket-menu-inactive";

  dict[ticket_state].style.animation = "ticket-out 500ms";
  await new Promise((r) => setTimeout(r, animation_timer));
  dict[ticket_state].style.display = "none";
  dict[new_ticket].style.display = "flex";
  dict[new_ticket].style.animation = "ticket-in 500ms";

  ticket_state = new_ticket;
}
