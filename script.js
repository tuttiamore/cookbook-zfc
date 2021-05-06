// JS goes here

//////////////////////////////////////////////
// Hover effects for daily meal recommendation
//////////////////////////////////////////////

// Functionality: expand image on hover, show name and characteristics of dish

let arrayMeals = document.querySelectorAll("article.day-meal");

////////////////////////////////// Visibility
console.log(arrayMeals);

function MealVisibilityHover() {
  //select elements to appear
  let charMeal = [this.firstElementChild, this.lastElementChild];
  //add visibility
  charMeal.forEach((element) => element.classList.add("meal-visible"));
}

function MealVisibilityNoHover() {
  //select elements to disappear
  let charMeal = [this.firstElementChild, this.lastElementChild];
  //remove visibility
  charMeal.forEach((element) => element.classList.remove("meal-visible"));
}

// add event listener: hover and action;

arrayMeals.forEach((meal) =>
  meal.addEventListener("mouseover", MealVisibilityHover)
);
arrayMeals.forEach((meal) =>
  meal.addEventListener("mouseout", MealVisibilityNoHover)
);

////////////////////////////////// Flex grow of images
console.log(arrayMeals);

function MealSizeHover() {
  //select elements to appear
  this.classList.add("day-meal-grow");
}

function MealSizeNoHover() {
  //select elements to disappear
  this.classList.remove("day-meal-grow");
}

// add event listener: hover and action;

arrayMeals.forEach((meal) => meal.addEventListener("mouseover", MealSizeHover));
arrayMeals.forEach((meal) =>
  meal.addEventListener("mouseout", MealSizeNoHover)
);

//////////////////////////////////////////////
// Menu appear on click in responsive mode
//////////////////////////////////////////////

let menuButton = document.querySelector(".menu-button");
console.log(menuButton);

function navMenuVisibility() {
  console.log("click");
  document.querySelector(".nav-menu-container").classList.toggle("visible");
}

menuButton.addEventListener("click", navMenuVisibility);
