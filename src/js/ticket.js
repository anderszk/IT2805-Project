let ticket_state = "student";

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
    dict[new_ticket].style.animation = "ticket-in 500ms";

    ticket_state = new_ticket;
}