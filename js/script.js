function hideResults() {
    document.getElementById("error-message").setAttribute("class", "hidden");
    document.getElementById("swings").setAttribute("class", "hidden");
    document.getElementById("coaster").setAttribute("class", "hidden");
    document.getElementById("tower").setAttribute("class", "hidden");
    document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const age = parseInt(document.querySelector("input#age").value);
        const height = parseInt(document.querySelector("input#height").value);

        if (age && height) {
            // Our original if statement starts here!
            if (age >= 12 && height >= 60) {
                document.getElementById("swings").removeAttribute("class");
                document.getElementById("coaster").removeAttribute("class");
                document.getElementById("tower").removeAttribute("class");
            } else if (age >= 12 || height >= 48) {
                document.getElementById("swings").removeAttribute("class");
                document.getElementById("coaster").removeAttribute("class");
            } else if (age >= 6) {
                document.getElementById("swings").removeAttribute("class");
            } else {
                document.getElementById("sorry").removeAttribute("class");
            }
            // Our original if statement ends here!
        } else {
            document.getElementById("error-message").removeAttribute("class");
        }
    }
};
