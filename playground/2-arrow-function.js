// const square = function (number) {
//   return number * number;
// };

// const square = (number) => {
//   return number * number;
// };

// const square = (number) => number * number;

// console.log(square(3));

const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
