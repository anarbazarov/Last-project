document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let list = button.nextElementSibling;

    if (list.classList.contains("hidden")) {
      document
        .querySelectorAll("ol")
        .forEach((ol) => ol.classList.add("hidden"));
      list.classList.remove("hidden");
      list.classList.add("active");
    } else {
      list.classList.remove("active");
      list.classList.add("hidden");
    }
  });
});
