const { immutableData } = require(".");

window.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");

  immutableData.subscribe(function (value) {
    result.innerHTML = value;
  });
});
