const person = {
  name: "Dabin",
  age: 30,
  hobbies: ["Game", "Drawing", "Play Guitar"],
};

let favoriteActivities: string[];
favoriteActivities = ["Game"];

console.log(person.name);

// 여기까지 중첩 된 객체 및 타입;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
