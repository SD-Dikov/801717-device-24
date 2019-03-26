var feedbackLink = document.querySelector(".main-info-contacts-button");
var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackPopupClose = document.querySelector(".popup-close-btn-feedback")
var feedbackPopupCloseBox = document.querySelector(".feedback-popup-close-box")

var mapLink = document.querySelector(".main-map-button");
var mapPopup = document.querySelector(".map-popup");
var mapPopupClose = document.querySelector(".popup-close-btn-map");
var mapPopupCloseBox = document.querySelector(".map-popup-close-box");

var searchInput = document.querySelector(".main-header-site-search-input");
var searchBox = document.querySelector(".main-header-site-search-input-box");

var form = document.querySelector(".feedback-form");
var fullname = document.querySelector(".fullname-input");
var email = document.querySelector(".email-input");

if (feedbackLink) {
  feedbackLink.addEventListener("click", function(evnt) {
    evnt.preventDefault();
    feedbackPopup.classList.add("show");
    feedbackPopupCloseBox.classList.add("show");
  })
};
if (feedbackPopupClose) {
  feedbackPopupClose.addEventListener("click", function(evnt) {
    evnt.preventDefault();
    feedbackPopup.classList.remove("show");
    feedbackPopupCloseBox.classList.remove("show");
  })
};
if (feedbackPopupCloseBox) {
  feedbackPopupCloseBox.addEventListener("click", function(evnt) {
    evnt.preventDefault();
    feedbackPopup.classList.remove("show");
    feedbackPopupCloseBox.classList.remove("show");
  })
};
if (mapLink) {
  mapLink.addEventListener("click", function(evnt) {
    evnt.preventDefault();
    mapPopup.classList.add("show");
    mapPopupCloseBox.classList.add("show");
  })
};
if (mapPopupClose) {
  mapPopupClose.addEventListener("click", function(evnt) {
    evnt.preventDefault();
    mapPopup.classList.remove("show");
    mapPopupCloseBox.classList.remove("show");
  })
};
if (mapPopupCloseBox) {
  mapPopupCloseBox.addEventListener("click", function(evnt) {
    evnt.preventDefault();
    mapPopup.classList.remove("show");
    mapPopupCloseBox.classList.remove("show");
  })
};
window.addEventListener("keydown", function(evnt) {
  if (evnt.keyCode === 27) {
    if (feedbackPopup.classList.contains("show")) {
      evnt.preventDefault();
      feedbackPopup.classList.remove("show");
      feedbackPopupCloseBox.classList.remove("show");
    }
  }
});
window.addEventListener("keydown", function(evnt) {
  if (evnt.keyCode === 27) {
    if (mapPopup.classList.contains("show")) {
      evnt.preventDefault();
      mapPopup.classList.remove("show");
      mapPopupCloseBox.classList.remove("show");
    }
  }
});
searchInput.addEventListener("blur", function() {
  if (searchInput.value) {
    searchBox.classList.add("show");
  } else if (!searchInput.value && searchBox.classList.contains("show")) {
    searchBox.classList.remove("show");
  }
});
if (form) {
  form.addEventListener("submit", function(evt) {
    if (!fullname.value || !email.value) {
      evt.preventDefault();
      if (form.classList.contains("invalid")) {
        form.classList.remove("invalid");
        form.classList.add("again-invalid");
      } else {
        if (form.classList.contains("again-invalid")) {
          form.classList.remove("again-invalid")
        }
        form.classList.add("invalid");
      }
    }
  })
};
if (email) {
  email.addEventListener("focus", function() {
    if (form.classList.contains("invalid")) {
      form.classList.remove("invalid");
    }
    if (form.classList.contains("again-invalid")) {
      form.classList.remove("again-invalid");
    }
  })
};
if (fullname) {
  fullname.addEventListener("focus", function() {
    if (form.classList.contains("invalid")) {
      form.classList.remove("invalid");
    }
    if (form.classList.contains("again-invalid")) {
      form.classList.remove("again-invalid");
    }
  })
};
