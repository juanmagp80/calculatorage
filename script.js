//import submit button :
let submitButton = document.getElementById("submit");

//import the fieldsets :
let dayField = document.getElementById("day");
let monthField = document.getElementById("month");
let yearField = document.getElementById("year");

//import the fields for the error messages :
let dayErrorMessage = document.querySelector(".day-error-message");
let monthErrorMessage = document.querySelector(".month-error-message");
let yearErrorMessage = document.querySelector(".year-error-message");

//import the labels :
let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label");
let yearLabel = document.getElementById("year-label");

//get the current year :
currentYear = new Date().getFullYear();
//get the current month (getMonth() returns month from 0 to 11) :
currentMonth = new Date().getMonth() + 1;
//get the current day of the month :
currentDay = new Date().getDate();

//day error message :
submitButton.onclick = () => {
  if (dayField.value == "") {
    dayErrorMessage.innerHTML = "This field is required";
    dayField.classList.add("error");
    dayLabel.classList.add("error");
    //add margin to the button when the error text is displayed
    document.querySelector(".btn-container").style.marginTop = "18%";
    //retrun the inner html to default :
    document.getElementById("number-of-days").innerHTML = "--";
  } else if (dayField.value > 31) {
    dayErrorMessage.innerHTML = "Must be a valid day";
    dayField.classList.add("error");
    dayLabel.classList.add("error");
    //add margin to the button when the error text is displayed
    document.querySelector(".btn-container").style.marginTop = "18%";
    //retrun the inner html to default :
    document.getElementById("number-of-days").innerHTML = "--";
  } else {
    //exceptional case for 30 days months :
    if ((monthField.value == 4, 6, 9, 11 && dayField.value == 31)) {
      dayErrorMessage.innerHTML = "Day does not exsist ";
      dayField.classList.add("error");
      dayLabel.classList.add("error");
      //add margin to the button when the error text is displayed
      document.querySelector(".btn-container").style.marginTop = "18%";
    }
    //exception for February (only 28 days) :
    else if (monthField.value == 2 && dayField.value > 28) {
      dayErrorMessage.innerHTML = "Day does not exsist ";
      dayField.classList.add("error");
      dayLabel.classList.add("error");
      //add margin to the button when the error text is displayed
      document.querySelector(".btn-container").style.marginTop = "18%";
    } else {
      dayErrorMessage.innerHTML = "";
      dayField.classList.remove("error");
      dayLabel.classList.remove("error");

      //calculate the number of days to display :
      let bornDay = dayField.value;
      numberOfDays = currentDay - bornDay;
      if (numberOfDays < 0) numberOfDays = 31 + currentDay - bornDay;
      document.getElementById("number-of-days").innerHTML = numberOfDays;
    }
  }

  //month error message :
  if (monthField.value == "") {
    monthErrorMessage.innerHTML = "This field is required";
    monthField.classList.add("error");
    monthLabel.classList.add("error");
    //add margin to the button when the error text is displayed
    document.querySelector(".btn-container").style.marginTop = "18%";
    //retrun the inner html to default :
    document.getElementById("number-of-months").innerHTML = "--";
  } else if (monthField.value > 12) {
    monthErrorMessage.innerHTML = "Must be a valid month";
    monthField.classList.add("error");
    monthLabel.classList.add("error");
    //add margin to the button when the error text is displayed
    document.querySelector(".btn-container").style.marginTop = "18%";
    //retrun the inner html to default :
    document.getElementById("number-of-months").innerHTML = "--";
  } else {
    if (currentMonth == monthField.value && currentDay < dayField.value) {
      numberOfMonths = 12 - 1;
      document.getElementById("number-of-months").innerHTML = numberOfMonths;
    } else {
      monthErrorMessage.innerHTML = "";
      monthField.classList.remove("error");
      monthLabel.classList.remove("error");

      //calculate the number of months to display :
      let bornMonth = monthField.value;
      numberOfMonths = currentMonth - bornMonth;
      if (numberOfMonths < 0) numberOfMonths = 12 + currentMonth - bornMonth;
      document.getElementById("number-of-months").innerHTML = numberOfMonths;
    }
  }

  //year error message :
  if (yearField.value == "") {
    yearErrorMessage.innerHTML = "This field is required";
    yearField.classList.add("error");
    yearLabel.classList.add("error");
    //add margin to the button when the error text is displayed
    document.querySelector(".btn-container").style.marginTop = "18%";
    //retrun the inner html to default :
    document.getElementById("number-of-years").innerHTML = "--";
  } else if (yearField.value > currentYear) {
    yearErrorMessage.innerHTML = "Must be in the past";
    yearField.classList.add("error");
    yearLabel.classList.add("error");
    //add margin to the button when the error text is displayed
    document.querySelector(".btn-container").style.marginTop = "18%";
    //retrun the inner html to default :
    document.getElementById("number-of-years").innerHTML = "--";
  } else {
    if (
      currentMonth < monthField.value ||
      (currentMonth == monthField.value && currentDay < dayField.value)
    ) {
      yearErrorMessage.innerHTML = "";
      yearField.classList.remove("error");
      yearLabel.classList.remove("error");

      //calculate the number of years to display :
      let bornYear = yearField.value;
      //minus one year because the birth month doesn't attend yet :
      numberOfYears = currentYear - bornYear - 1;
      document.getElementById("number-of-years").innerHTML = numberOfYears;
    } else {
      yearErrorMessage.innerHTML = "";
      yearField.classList.remove("error");
      yearLabel.classList.remove("error");

      //calculate the number of years to display :
      let bornYear = yearField.value;
      numberOfYears = currentYear - bornYear;
      document.getElementById("number-of-years").innerHTML = numberOfYears;
    }
  }

  //return margin to default when the error text is empty
  if (
    dayErrorMessage.innerHTML == "" &&
    monthErrorMessage.innerHTML == "" &&
    yearErrorMessage.innerHTML == ""
  ) {
    document.querySelector(".btn-container").style.marginTop = "13%";
  }

  //return age numbers to default when the error text is displayed
  if (
    dayErrorMessage.innerHTML != "" ||
    monthErrorMessage.innerHTML != "" ||
    yearErrorMessage.innerHTML != ""
  ) {
    document.getElementById("number-of-years").innerHTML = "--";
    document.getElementById("number-of-months").innerHTML = "--";
    document.getElementById("number-of-days").innerHTML = "--";
  }
};
