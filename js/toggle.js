// page toggle

document.getElementById("blog-btn").addEventListener("click", () => {
  window.location.href = "./blog.html";
});

// button toggle

document.getElementById("donation-btn").addEventListener("click", (event) => {
  showSectionById("donation-section");
  event.target.classList.add("bg-primary");
  document.getElementById("history-btn").classList.remove("bg-primary");
});

document.getElementById("history-btn").addEventListener("click", (event) => {
  showSectionById("history-section");
  event.target.classList.add("bg-primary");
  document.getElementById("donation-btn").classList.remove("bg-primary");
});
