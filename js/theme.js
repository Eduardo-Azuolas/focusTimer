import {
  buttonSet,
  buttonSoundOff,
  buttonStop
} from "./elements.js"

const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function() {
  document.body.classList.toggle("light");
  buttonSet.classList.toggle("light");
  buttonSoundOff.classList.toggle("light");
  buttonStop.classList.toggle("light")
  controls.classList.toggle("light")
})
