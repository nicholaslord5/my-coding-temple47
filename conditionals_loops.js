let loggedIn = true;

let cart = [
  'Shirts',
  'Shoes',
  'Bread',
  'Cell Phone',
  'Candy Corn',
  'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
  'Tomato'
];

if (loggedIn) {
  console.log("You're logged in! Here are the items in your cart:");

  for (let item of cart) {
    console.log("- " + item);
  }
} else {
  console.log("Please log in to view your cart.");
}