
/**
 * This function creates the elements for the logo, sets the
 * appropriate attributes and classes and appends the child-
 * elements to the wrapper
 * 
 * @returns a Div with the logo content
 */
const logo = () =>{
    const wrapper = document.createElement("div");
    const anchor = document.createElement("a");
    const image = document.createElement("img");
    anchor.setAttribute("href", "index.html");
    image.src ="img/clarity.png";
    image.id = "navbar-icon";
    image.setAttribute("alt", "homepage-icon");
    wrapper.classList.add("menu-logo");
    anchor.appendChild(image);
    wrapper.appendChild(anchor);
    return wrapper;
}

/**
 * This function creates the elements for the logo, sets the
 * appropriate attributes and classes and appends the child-
 * elements to the wrapper.
 * 
 * In addition, it checks the filename to decide if the menu-
 * item should be active or not.
 * 
 * @returns a Div with the menu items
 */
const menu_items = () => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("menu-items")
    const site = window.location.pathname.split("/").pop().split(".")[0];
    var items_map = {
        index: "Home",
        about: "About Us",
        contact: "Contact",
        tickets: "Tikets"
    }

    const home = document.createElement("a");
    home.innerHTML = "Home"

    const aboutus = document.createElement("a");
    aboutus.innerHTML = "About Us"

    const contact = document.createElement("a");
    contact.innerHTML = "Contact"

    var items_list = [home, aboutus, contact]

    for(let i = 0; i < items_list.length; i++){
        if(items_list[i].innerHTML == items_map[site]){ 
            items_list[i].classList.add("menu-item-active")
        }
        else{
            items_list[i].classList.add("menu-item-inactive");
            items_list[i].href = `${Object.keys(items_map).find(key => items_map[key] === items_list[i].innerHTML)}.html`;

        }
        wrapper.appendChild(items_list[i]);
    }
    return wrapper;
}

/**
 * This function creates the elements for the logo, sets the
 * appropriate attributes and classes and appends the child-
 * elements to the wrapper
 * 
 * @returns a Div with the CTA
 */
const cta = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("btn-holder");
    const anchor = document.createElement("a");
    anchor.href = "tickets.html";
    anchor.innerHTML = "Buy Tickets Now";
    anchor.classList.add("btn-nav");
    wrapper.appendChild(anchor);
    return wrapper;
}

/**
 * Creates nodes from the functions above and appends them into the
 * navbar-wrapper.
 */

const navbar = () => {
    const navbar_div = document.getElementById("navbar");
    const logo_div = logo();
    const menu_items_div = menu_items();
    const cta_div = cta();
    navbar_div.appendChild(logo_div);
    navbar_div.appendChild(menu_items_div);
    navbar_div.appendChild(cta_div)
  }
  
  navbar();
  