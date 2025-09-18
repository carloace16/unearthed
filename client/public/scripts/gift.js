const renderGift = async () => {
  // Get the gift ID from the URL
  const requestedID = parseInt(window.location.href.split("/").pop());

  // Fetch all the gift data
  const response = await fetch("/gifts");
  const data = await response.json();

  const giftContent = document.getElementById("gift-content");

  let gift;

  if (data) {
    // Find the specific gift that matches the ID from the URL
    gift = data.find((gift) => gift.id === requestedID);
  }

  if (gift) {
    // Update the page elements with the gift's data
    document.getElementById("image").src = gift.image;
    document.getElementById("name").textContent = gift.name;
    document.getElementById("submittedBy").textContent =
      "Submitted by: " + gift.submittedBy;
    document.getElementById("pricePoint").textContent =
      "Price: " + gift.pricePoint;
    document.getElementById("audience").textContent =
      "Audience: " + gift.audience;
    document.getElementById("description").textContent = gift.description;
    document.title = `UnEarthed - ${gift.name}`;
  } else {
    // If no gift is found, display a message
    const message = document.createElement("h2");
    message.textContent = "No Gift Available 😞";
    giftContent.appendChild(message);
  }
};

renderGift();
