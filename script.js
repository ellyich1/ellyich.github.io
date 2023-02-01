window.onload = function () {
  const images = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("modal");
  const close = document.querySelector(".close");
  const name = document.getElementById("name");
  const medium = document.getElementById("medium");
  const size = document.getElementById("size");
  const date = document.getElementById("date");
  const description = document.getElementById("description");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      modal.style.display = "block";
      name.innerHTML = image.getAttribute("data-name");
      medium.innerHTML = image.getAttribute("data-medium");
      size.innerHTML = image.getAttribute("data-size");
      date.innerHTML = image.getAttribute("data-date");
      description.innerHTML = image.getAttribute("data-description");
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};
