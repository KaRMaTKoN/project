let containers = document.querySelector(".container");
let nav = document.querySelector(".nav");
containers.addEventListener("click", () => {
  containers.classList.toggle("change");
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    document.body.style.overflow = "visible";
  } else {
    nav.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});
