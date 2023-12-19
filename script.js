// Button no will be move when hovered

const b = document.querySelector(".no");

b.addEventListener("mouseenter", () => {
    b.classList.add("no-move");
    let newX, newY;
    let overlap;
    do {
        overlap = false;
        newX = Math.floor(Math.random() * (window.innerWidth - b.offsetWidth));
        newY = Math.floor(Math.random() * (window.innerHeight - b.offsetHeight));

        // Check if the new position overlaps with other elements
        // This is a basic example. You'll need a more complex check based on your page's layout
        document.querySelectorAll('h2, div.button').forEach((elem) => {
            const rect = elem.getBoundingClientRect();
            if (newX < rect.right && newX + b.offsetWidth > rect.left &&
                newY < rect.bottom && newY + b.offsetHeight > rect.top) {
                overlap = true;
            }
        });
    } while (overlap);

    b.style.left = newX + 'px';
    b.style.top = newY + 'px';
});


// This is for yes alert message

// document.querySelector(".yes").addEventListener("click",() => {
//     alert("Cậu chính thức làm ny của tớ :>");
// });

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".yes");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
