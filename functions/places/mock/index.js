/* eslint-disable no-undef */


const lulu =require("./lulu");
const malappuram  =require("./malappuram");
const kazhakoottam =require("./kazhakoottam");
const kochi =require("./kochi");

module.exports.mocks = {
    "8.564831,76.872393":kazhakoottam,
    "8.5157461,76.8987208":lulu,
    "11.363724,76.299315":malappuram,
    "9.941354,76.249973":kochi,
};

const mockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  restaurant.photos = [randomImage];
  return restaurant;
};