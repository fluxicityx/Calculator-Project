const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue bg-opacity-25";
const bdy = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));