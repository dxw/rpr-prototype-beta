/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  if (window.screen.width < 480) {
    document.getElementsByClassName('rpr-listing__filters-container')[0].removeAttribute("open");
  };

  if (window.screen.width >= 480) {
    document.getElementsByClassName('rpr-listing__filters-container')[0].addAttribute("open");
  };
})
