const STORAGE_KEY = "pomodoroMinutes";
const MIN_MINUTES = 1;
const MAX_MINUTES = 60;

const timerMinutesInput = document.getElementById("timerMinutes");
const btnComplete = document.getElementById("btnComplete");

function isValidMinutes(value) {
  if (value === "") return false;
  const minutes = Number(value);
  return Number.isInteger(minutes) && minutes >= MIN_MINUTES && minutes <= MAX_MINUTES;
}

function updateButtonState() {
  btnComplete.disabled = !isValidMinutes(timerMinutesInput.value);
}

function loadStoredMinutes() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) {
    timerMinutesInput.value = stored;
  }
  updateButtonState();
}

function saveSetting() {
  if (!isValidMinutes(timerMinutesInput.value)) return;

  localStorage.setItem(STORAGE_KEY, timerMinutesInput.value);
  location.href = "index.html";
}

timerMinutesInput.addEventListener("input", updateButtonState);

loadStoredMinutes();
