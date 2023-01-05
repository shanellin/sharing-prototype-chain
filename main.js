//-- [constructor]
function User(name, age) {
  // 實例成員
  this.name = name;
  this.age = age;
  this.read = function () {
    console.log("read");
  };
}
let user = new User("Shanelin", 18);
user.read();

// 靜態成員
User.eat = function () {
  console.log("eat");
};

//-- [prototype]
console.log(User);
console.log(User.prototype);

let peter = new User("peter", 18);
let annie = new User("annie", 18);

console.log(peter.read === annie.read);

User.prototype.write = function () {
  console.log("write");
};
console.log(peter.write === annie.write);

//-- [__proto__]
console.log(peter);
console.log(peter.__proto__);
console.log(peter.__proto__ === User.prototype);

//-- [prototype chain]
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

let tempObj = {
  name: "temp",
};
let obj = Object.create(tempObj);
console.log(obj);
console.log(obj.name);

//-- [__proto__] wrong case
peter.__proto__.write = function () {
  console.log("new write");
};
User.prototype.write();
