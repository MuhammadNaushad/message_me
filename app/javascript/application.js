import "@hotwired/turbo-rails";
import "controllers";

// Dropdown init — turbo:load use karo, turbolinks nahi
document.addEventListener("turbo:load", function () {
  $(".ui.dropdown").dropdown();
});

// Pehli baar page load ke liye
document.addEventListener("DOMContentLoaded", function () {
  $(".ui.dropdown").dropdown();
});
