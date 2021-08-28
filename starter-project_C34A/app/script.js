"use strict";

(function() {
  window.addEventListener("load", init);

  /**
   * function called on initialization
   */
  function init() {
    let input = qs("input");
    input.addEventListener("focusin", function(event) {
      this.value = "";
    });
    input.addEventListener("input", function() {
      if (this.value !== "") {
        qs("button").classList.remove("hidden");
      } else {
        qs("button").classList.add("hidden");
      }
    })
    qs("button").addEventListener("click", enterName);
  }

  /**
   * submit name
   * @param {PointerEvent} event onClick event
   */
  function enterName(event) {
    let val = qs("input").value;
    let h1 = qs("h1");
    if (val === "" || val === "enter name here") {
      h1.textContent = "Cmon, whats your name?";
      setTimeout(() => {
        h1.textContent = "Hi! Whats your name?";
      }, 3000);
    } else {
      let capitalized = val.charAt(0).toUpperCase() + val.slice(1);
      h1.textContent = "Hello, " + capitalized + "!";
      console.log(h1, capitalized);
    }
  }

  // -------- helper functions --------

  /**
   * document.querySelector shorthand
   * @param {String} selector CSS selector string
   * @returns {HTMLElement} result
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();