import { getModal } from './helpers/getModal.js';

document.addEventListener('DOMContentLoaded', function() {
  // Load modal.js
  getModal("myResModal", "myResBtn", "myResClose");
  getModal("myWhenModal", "myWhenBtn", "myWhenClose");
  getModal("myAppModal", "myAppBtn", "myAppClose");
  getModal("myWeatherModal", "myWeatherBtn", "myWeatherClose");
  // I FINALLY GOT WINDOW TO WORK FOR EACH BUTTTT
  // I CANT GET SPAN TO WORK ON EACH
});
