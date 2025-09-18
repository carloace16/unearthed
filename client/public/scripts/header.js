const header = document.querySelector("header");

// Create container for the whole header
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

// Create left side of the header (logo and title)
const headerLeft = document.createElement("div");
headerLeft.className = "header-left";

const logo = document.createElement("img");
logo.src = "logo.png";

const title = document.createElement("h1");
title.textContent = "UnEarthed";

headerLeft.append(logo, title);

// Create right side of the header (button)
const headerRight = document.createElement("div");
headerRight.className = "header-right";

const homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.addEventListener("click", () => {
  window.location.href = "/";
});

headerRight.append(homeButton);

// Append left and right sides to the main container
headerContainer.append(headerLeft, headerRight);

// Append the main container to the <header> element in the HTML
header.append(headerContainer);
