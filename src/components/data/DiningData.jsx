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
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "Closed",
          "Closed",
          "Closed",
          "Closed",
          "Closed",
          "10:00 AM - 2:30 PM",
          "Closed",
        ],
      },
      {
        title: "Lunch",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "11:00 AM - 2:30 PM",
          "11:00 AM - 2:30 PM",
          "11:00 AM - 2:30 PM",
          "11:00 AM - 2:30 PM",
          "11:00 AM - 2:30 PM",
          "Closed",
          "Closed",
        ],
      },
      {
        title: "Dinner",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "5:00 PM - 10:00 PM",
          "5:00 PM - 10:00 PM",
          "5:00 PM - 10:00 PM",
          "5:00 PM - 10:00 PM",
          "5:00 PM - 10:00 PM",
          "5:00 PM - 9:00 PM",
          "Closed",
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
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "7:30 AM - 10:30 AM",
          "7:30 AM - 10:30 AM",
          "7:30 AM - 10:30 AM",
          "7:30 AM - 10:30 AM",
          "7:30 AM - 10:30 AM",
          "Closed",
          "10:00 AM - 2:30 PM",
        ],
      },
      {
        title: "Lunch",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "10:30 AM - 2:30 PM",
          "10:30 AM - 2:30 PM",
          "10:30 AM - 2:30 PM",
          "10:30 AM - 2:30 PM",
          "10:30 AM - 2:30 PM",
          "Closed",
          "Closed",
        ],
      },
      {
        title: "Dinner",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "5:00 PM - 9:00 PM",
          "5:00 PM - 9:00 PM",
          "5:00 PM - 9:00 PM",
          "5:00 PM - 9:00 PM",
          "5:00 PM - 9:00 PM",
          "Closed",
          "5:00 PM - 9:00 PM",
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
      {
        title: "none",

        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "7:00 AM - 11:00 PM",
          "7:00 AM - 11:00 PM",
          "7:00 AM - 11:00 PM",
          "7:00 AM - 11:00 PM",
          "7:00 AM - 11:00 PM",
          "8:00 AM - 9:00 PM",
          "8:00 AM - 9:00 PM",
        ],
      },
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
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        time: [
          "10:30 AM - 10:00 PM",
          "10:30 AM - 10:00 PM",
          "10:30 AM - 10:00 PM",
          "10:30 AM - 10:00 PM",
          "10:30 AM - 9:00 PM",
          "Closed",
          "10:30 AM - 9:00 PM",
        ],
      },
    ],
    address: "733 W Linden St, Riverside, CA 92521",
  },
];

export default DiningData;
