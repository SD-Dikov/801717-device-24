var feedbackLink=document.querySelector(".main-info-contacts-button"),feedbackPopup=document.querySelector(".feedback-popup"),feedbackPopupClose=document.querySelector(".popup-close-btn-feedback"),feedbackPopupCloseBox=document.querySelector(".feedback-popup-close-box"),mapLink=document.querySelector(".main-map-button"),mapPopup=document.querySelector(".map-popup"),mapPopupClose=document.querySelector(".popup-close-btn-map"),mapPopupCloseBox=document.querySelector(".map-popup-close-box"),searchInput=
document.querySelector(".main-header-site-search-input"),searchBox=document.querySelector(".main-header-site-search-input-box"),form=document.querySelector(".feedback-form"),fullname=document.querySelector(".fullname-input"),email=document.querySelector(".email-input");feedbackLink.addEventListener("click",function(a){a.preventDefault();feedbackPopup.classList.add("show");feedbackPopupCloseBox.classList.add("show")});
feedbackPopupClose.addEventListener("click",function(a){a.preventDefault();feedbackPopup.classList.remove("show");feedbackPopupCloseBox.classList.remove("show")});feedbackPopupCloseBox.addEventListener("click",function(a){a.preventDefault();feedbackPopup.classList.remove("show");feedbackPopupCloseBox.classList.remove("show")});mapLink.addEventListener("click",function(a){a.preventDefault();mapPopup.classList.add("show");mapPopupCloseBox.classList.add("show")});
mapPopupClose.addEventListener("click",function(a){a.preventDefault();mapPopup.classList.remove("show");mapPopupCloseBox.classList.remove("show")});mapPopupCloseBox.addEventListener("click",function(a){a.preventDefault();mapPopup.classList.remove("show");mapPopupCloseBox.classList.remove("show")});window.addEventListener("keydown",function(a){27===a.keyCode&&feedbackPopup.classList.contains("show")&&(a.preventDefault(),feedbackPopup.classList.remove("show"),feedbackPopupCloseBox.classList.remove("show"))});
window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("show")&&(a.preventDefault(),mapPopup.classList.remove("show"),mapPopupCloseBox.classList.remove("show"))});searchInput.addEventListener("blur",function(){searchInput.value?searchBox.classList.add("show"):!searchInput.value&&searchBox.classList.contains("show")&&searchBox.classList.remove("show")});form.addEventListener("submit",function(a){fullname.value&&email.value||(a.preventDefault(),form.classList.add("invalid"))});
email.addEventListener("focus",function(){form.classList.contains("invalid")&&(console.log("123"),form.classList.remove("invalid"))});fullname.addEventListener("focus",function(){form.classList.contains("invalid")&&form.classList.remove("invalid")});
