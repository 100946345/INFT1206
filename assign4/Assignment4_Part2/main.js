
/*
	Name: Manuel Antunes
	File: main.js
	Date: 04 April 2025
    In this part of the project, I was tasked with creating an image gallery using JavaScript, HTML, CSS, and image src.	
  
  */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = {"pic1.jpg" : "Closeup of an eye",
    "pic2.jpg" : "Rocks with wavy shapes",
    "pic3.jpg" : "Purple and white flowers",
    "pic4.jpg" : "Ancient Egyptian art",
    "pic5.jpg" : "A moth on a green leaf"}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click",() => {
    const btnClass = btn.getAttribute("class");

    if (btnClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 50%)';
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0%)';}
});
