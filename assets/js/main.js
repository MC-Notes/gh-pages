function navbarExtendCollapse() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " extended";
    } else {
        x.className = "navigation";
    }
}