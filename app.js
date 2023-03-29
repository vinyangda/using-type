var person = {
    name: "Dabin",
    age: 30,
    hobbies: ["Game", "Drawing", "Play Guitar"],
    role: [2, "author"],
};
person.role.push("admin");
person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Game"];
console.log(person.name);
// 여기까지 중첩 된 객체 및 타입;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
