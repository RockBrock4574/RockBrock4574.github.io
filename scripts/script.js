/*
    Student Name: Matthew Hall
    File Name: script.js
    Date: 7/25/2024
*/

//Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var navicon = document.getElementById("nav-icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        navicon.style.color = "#ba6f25";
    } else {
        navlinks.style.display = "block";
        navicon.style.color = "#401204";
    }
}