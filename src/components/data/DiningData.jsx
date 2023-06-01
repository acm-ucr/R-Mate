const DiningData = [
  {
    picture: require("../../../assets/LothianResidentialRestaurant.png"),
    location_name: "Lothian Residential Restaurant",
    category: "Dining Hall, Food",
    paying: [
      "Meal Swipes",
      "Dining Dollars",
      "Bear Bucks",
      "MasterCard",
      "Visa",
    ],
    hours: [
      {
        title: "Breakfast/Brunch",
        hours: [
          "Monday/Closed",
          "Tuesday/Closed",
          "Wednesday/Closed",
          "Thursday/Closed",
          "Friday/Closed",
          "Saturday/10:00 AM - 2:30 PM",
          "Sunday/Closed",
        ],
      },
      {
        title: " Lunch",
        hours: [
          "Monday/11:00 AM - 2:30 PM",
          "Tuesday/11:00 AM - 2:30 PM",
          "Wednesday/11:00 AM - 2:30 PM",
          "Thursday/11:00 AM - 2:30 PM",
          "Friday/11:00 AM - 2:30 PM",
          "Saturday/Closed",
          "Sunday/Closed",
        ],
      },
      {
        title: "Dinner",
        hours: [
          "Monday/5:00 PM - 10:00 PM",
          "Tuesday/5:00 PM - 10:00 PM",
          "Wednesday/5:00 PM - 10:00 PM",
          "Thursday/5:00 PM - 10:00 PM",
          "Friday/5:00 PM - 10:00 PM",
          "Saturday/5:00 PM - 9:00 PM",
          "Sunday/Closed",
        ],
      },
    ],
    website: "http://dining.ucr.edu/marketatglenmor/",
    address: "500 W Big Springs Rd, Riverside, CA 92507",
    phoneNumber: "(951) 827-6350",
  },
  {
    picture: require("../../../assets/GlasgowResidentialRestaurant.png"),
    location_name: "Glasgow Residential Restaurant",
    paying: [
      "Meal Swipes",
      "Dining Dollars",
      "Bear Bucks",
      "MasterCard",
      "Visa",
    ],
    category: "Dining Hall, Food",
    hours: [
      {
        title: "Breakfast/Brunch",
        hours: [
          "Monday/7:30 AM - 10:30 AM",
          "Tuesday/7:30 AM - 10:30 AM",
          "Wednesday/7:30 AM - 10:30 AM",
          "Thursday/7:30 AM - 10:30 AM",
          "Friday/7:30 AM - 10:30 AM",
          "Saturday/Closed",
          "Sunday/10:00 AM - 2:30 PM",
        ],
      },
      {
        title: " Lunch",
        hours: [
          "Monday/10:30 AM - 2:30 PM",
          "Tuesday/10:30 AM - 2:30 PM",
          "Wednesday/10:30 AM - 2:30 PM",
          "Thursday/10:30 AM - 2:30 PM",
          "Friday/10:30 AM - 2:30 PM",
          "Saturday/Closed",
          "Sunday/Closed",
        ],
      },
      {
        title: "Dinner",
        hours: [
          "Monday/5:00 PM - 9:00 PM",
          "Tuesday/5:00 PM - 9:00 PM",
          "Wednesday/5:00 PM - 9:00 PM",
          "Thursday/5:00 PM - 9:00 PM",
          "Friday/5:00 PM - 9:00 PM",
          "Saturday/Closed",
          "Sunday/5:00 PM - 9:00 PM",
        ],
      },
    ],
    address: "680 W Linden St, Riverside, CA 92507",
  },
  {
    picture: require("../../../assets/StarbucksatGlenMor.png"),
    location_name: "Starbucks at Glen Mor",
    paying: ["Dining Dollars", "Bear Bucks", "MasterCard", "Visa"],
    hours: [
      "Monday/7:00 AM - 11:00 PM",
      "Tuesday/7:00 AM - 11:00 PM",
      "Wednesday/7:00 AM - 11:00 PM",
      "Thursday/7:00 AM - 11:00 PM",
      "Friday/7:00 AM - 11:00 PM",
      "Saturday/8:00 AM - 9:00 PM",
      "Sunday/8:00 AM - 9:00 PM",
    ],
    address: "400 W Big Springs Rd Riverside, CA 92507",
  },
  {
    picture: require("../../../assets/LollicupFreshBoba.png"),
    location_name: "Lollicup Fresh Boba",
    paying: ["Dining Dollars", "Bear Bucks", "MasterCard", "Visa"],
    hours: [
      {
        title: "none",
        hours: [
          "Monday/10:30 AM - 10:00 PM",
          "Tuesday/10:30 AM - 10:00 PM",
          "Wednesday/10:30 AM - 10:00 PM",
          "Thursday/10:30 AM - 10:00 PM",
          "Friday/10:30 AM - 9:00 PM",
          "Saturday/Closed",
          "Sunday/10:30 AM - 9:00 PM",
        ],
      },
    ],
    address: "733 W Linden St, Riverside, CA 92521",
  },
];

export default DiningData;
