// scroll to top icon
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburger selections
const burger = document.querySelector("#burger-menu"); // selects burger in navbar, the three lines
const ul = document.querySelector("nav ul"); //selects the list items
const nav = document.querySelector("nav");//selects the whole nav container itself

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => // for each executes a provided function once for each array element. - callback fn
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
