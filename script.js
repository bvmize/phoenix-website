// Trophy Case Event Listeners
function showTrophyDesc(e){
    const display = document.querySelector("#trophy-display"); 
    let id = e.target.getAttribute('id');
    let year = `20${id[0]}${id[1]} `;
    let trophyDesc = "";
    let event = "";
    switch (id[2]) {
        case 'P':
            event = "Pro Champs";
            break;
        case 'E':
            event = "Elite Select";
            break;
        case 'N':
            event = "USAU Nats";
            break;
        case "R":
            event = "Regionals";
            break;
        case "W":
            event = "WUCC";
            break;
        case "1":
            event = "TCT Pro Flight";
            break;
        case "2":
            event = "TCT Elite Flight";
            break;
        default:
            event = "- no frisbee...";
    }
    if (id.length === 3) {
        trophyDesc = year + event;
    }
    else {
        let place = "";
        switch (id[3]) {
            case '1':
                place = "1st @ ";
                break;
            case '2':
                place = "2nd @ ";
                break;
            default:
                place = "3rd @ ";
                break;
        }
        trophyDesc = place + year + event;
    }
    display.textContent = trophyDesc;
} 

function hideTrophyDesc(){
    const display = document.querySelector("#trophy-display");
    display.textContent = "Take a look around!";   
}

function toggleHamburgerMenu(){
    const navbarLinks = document.querySelector(".navbar-links");
    navbarLinks.classList.toggle("active")
    console.log(navbarLinks.classList);
}


//Bind Event handlers
function bindEventHandlers(){
    const trophies = Array.from(document.querySelectorAll(".about-trophies span"));
    for (let node of trophies) {
        node.addEventListener('mouseover', showTrophyDesc);
        node.addEventListener('mouseout', hideTrophyDesc);
    }

    const hamburgerMenu = document.querySelector(".navbar-burger");
    hamburgerMenu.addEventListener('click', toggleHamburgerMenu);
}

//Bind Event Listeners
addEventListener('load', bindEventHandlers);