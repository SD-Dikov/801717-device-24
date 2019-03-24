var searchInput = document.querySelector(".main-header-site-search-input");
var searchBox = document.querySelector(".main-header-site-search-input-box");

searchInput.addEventListener("blur", function() {
  if (searchInput.value) {
    searchBox.classList.add("show");
  } else if (!searchInput.value && searchBox.classList.contains("show")) {
    searchBox.classList.remove("show");
  }
});
