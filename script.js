// Container and Cards
const container = document.querySelector(".container");
console.log(container);
// Input Value
const inputDay = document.querySelector(".input-day");
const inputMonth = document.querySelector(".input-month");
const inputYear = document.querySelector(".input-year");
console.log(inputDay, inputMonth, inputYear);
// Btn submit
const cardSubmit = document.querySelector(".card-submit");
const btn = document.querySelector(".btn");
console.log(btn, cardSubmit);

// Group Result
const cardResult = document.querySelector(".card-result");
const resultDay = document.querySelector(".span-day");
const resultMonth = document.querySelector(".span-month");
const resultYear = document.querySelector(".span-year");
console.log(resultDay, resultMonth, resultYear, cardResult);

// Text Error
const textError = document.querySelectorAll(".text-error");
const textErrorday = document.querySelector(".text-error-day");
const textErrormonth = document.querySelector(".text-error-month");
const textErroryear = document.querySelector(".text-error-year");
console.log(textError, textErrorday, textErrormonth, textErroryear);

btn.addEventListener("click", () => {
  const dayValue = inputDay.value;
  const monthValue = inputMonth.value;
  const yearValue = inputYear.value;
  console.log("ok chua", dayValue, monthValue, yearValue);
  let isValue = true;
  if (dayValue === "") {
    textErrorday.style.display = "flex";
    inputDay.classList.add("border-active");
    isValue = false;
  } else if (dayValue < 1 || dayValue > 31) {
    textErrorday.textContent = "Must be a valid Day";
    textErrorday.style.display = "flex";
    inputDay.classList.add("border-active");
    isValue = false;
  } else {
    textErrorday.style.display = "none";
    inputDay.classList.remove("border-active");
  }

  if (monthValue === "") {
    textErrormonth.style.display = "flex";
    inputMonth.classList.add("border-active");
    isValue = false;
  } else if (monthValue < 1 || monthValue > 12) {
    textErrormonth.textContent = "Must be a valid Month";
    textErrormonth.style.display = "flex";
    inputMonth.classList.add("border-active");
    isValue = false;
  } else {
    textErrormonth.style.display = "none";
    inputMonth.classList.remove("border-active");
  }

  if (yearValue === "") {
    textErroryear.style.display = "flex";
    inputYear.classList.add("border-active");
    isValue = false;
  } else if (yearValue < 1 || yearValue > 2026) {
    textErroryear.textContent = "Must be a valid Year";
    textErroryear.style.display = "flex";
    inputYear.classList.add("border-active");
    isValue = false;
  } else {
    textErroryear.style.display = "none";
    inputYear.classList.remove("border-active");
  }

  if (isValue) {
    const testDate = new Date(yearValue, monthValue - 1, dayValue);
    if (
      testDate.getFullYear() != yearValue ||
      testDate.getMonth() != monthValue - 1 ||
      testDate.getDate() != dayValue
    ) {
      textErrorday.textContent = "Must be a valid Date";
      textErrorday.style.display = "flex";
      inputDay.classList.add("border-active");
      isValue = false;
    }

    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    let calculatedDay = currentDay - dayValue;
    let calculatedMonth = currentMonth - monthValue;
    let calculatedYear = currentYear - yearValue;

    if (calculatedDay < 0) {
      calculatedMonth--;
      let daysInLastMonth = new Date(
        currentYear,
        currentMonth - 1,
        0,
      ).getDate();
      calculatedDay += daysInLastMonth;
    }
    if (calculatedMonth < 0) {
      calculatedYear--;
      calculatedMonth += 12;
    }

    resultDay.textContent = calculatedDay;
    resultMonth.textContent = calculatedMonth;
    resultYear.textContent = calculatedYear;
  }
});
