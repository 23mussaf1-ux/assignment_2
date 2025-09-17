document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleBtn");
  const hiddenText = document.getElementById("hiddenText");

  button.addEventListener("click", () => {
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block";
      button.textContent = "Hide Text";
    } else {
      hiddenText.style.display = "none";
      button.textContent = "Click Me";
    }
  });
});

