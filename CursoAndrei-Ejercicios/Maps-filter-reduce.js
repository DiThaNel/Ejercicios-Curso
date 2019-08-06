//map
const array = [1,2,3,4];
const maparray = array.map(num => num + 2);
console.log(maparray);

//filter
const array = [1,2,3,4];
const filterArray = array.filter(num => num >= 3);
console.log(filterArray)

//reduce
const array = [1,2,3,4];
const reducedArray = array.reduce((acc,num) => {
   return acc + num;
},1);
console.log(reducedArray);

const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

//Find out the total score of all users using reduce
const reducedArray = array.reduce((acc,user) => {
   return acc + user.score;
},0);
console.log(reducedArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter((user) => {
  return user.team === "red";
});
console.log(filterArray);


//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const mapedArray = array.map((user) =>{
   return user.username + "!";
});
console.log(mapedArray);

