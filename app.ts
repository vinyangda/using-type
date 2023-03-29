const person: {
  name: string;
  age: number;
  hobbies: string[]; //this is type array
  role: [number, string]; // this is tuple type
} = {
  name: "Dabin",
  age: 30,
  hobbies: ["Game", "Drawing", "Play Guitar"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Game"];

console.log(person.name);

// 여기까지 중첩 된 객체 및 타입;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); !!! ERROR !!!
}

//array type

// export value
// Dabin
// app.js:12 GAME
// app.js:12 DRAWING
// app.js:12 PLAY GUITAR

// What is 'tuple type'?

// tuple type is one of 'Array'
// whiches has a fixed length array
//and fixed type array
