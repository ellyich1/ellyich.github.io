window.onload = function () {
  const artImages = document.querySelectorAll(".gallery-item");
  const theatreImages = document.querySelectorAll(".gallery-item-theatre");
  const modal = document.getElementById("modal");
  const modalTheatre = document.getElementById("modal-theatre");
  const close = document.querySelector(".close");
  const name = document.getElementById("name");
  const nameTheatre = document.getElementById("nameTheatre");
  const medium = document.getElementById("medium");
  const size = document.getElementById("size");
  const date = document.getElementById("date");
  const dateTheatre = document.getElementById("dateTheatre");
  const description = document.getElementById("description");
  const descriptionTheatre = document.getElementById("descriptionTheatre");

  artImages.forEach((image) => {
    image.addEventListener("click", () => {
      modal.style.display = "block";
      name.innerHTML = image.getAttribute("data-name");
      medium.innerHTML = image.getAttribute("data-medium");
      size.innerHTML = image.getAttribute("data-size");
      date.innerHTML = image.getAttribute("data-date");
      description.innerHTML = image.getAttribute("data-description");
    });
  });

  theatreImages.forEach((image) => {
    image.addEventListener("click", () => {
      modalTheatre.style.display = "block";
      nameTheatre.innerHTML = image.getAttribute("data-nameTheatre");
      dateTheatre.innerHTML = image.getAttribute("data-dateTheatre");
      descriptionTheatre.innerHTML = image.getAttribute(
        "data-descriptionTheatre"
      );
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
    modalTheatre.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
    if (e.target === modalTheatre) {
      modalTheatre.style.display = "none";
    }
  });
};
