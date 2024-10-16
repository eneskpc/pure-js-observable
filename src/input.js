const { immutableData } = require(".");

window.addEventListener("DOMContentLoaded", function () {
  const message = document.getElementById("message");

  message.addEventListener("input", function () {
    immutableData.value = message.value;
  });
});
