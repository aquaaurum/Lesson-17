var counter = function (num) {
  counter.count = num !==undefined ? num : counter.count;
   return counter.count++;
};

counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(30));
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());


var greet = function() {
  return 'My name is ' + this.name;
}

var person1 = {
  name: 'Tom',
  greet: greet
}

var person2 = {
  name: 'Alan',
  greet: greet
};

console.log(person1.greet());
console.log(person2.greet());

var Browser = {
  firstName: 'Google',
  secondName: 'Hrome',

get fullName() {
    return this.firstName + '-' + this.secondName;
},

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.secondName = split[1];
  }
  
};
console.log( Browser.fullName );

Browser.fullName = 'Google Hrome';
console.log( Browser.firstName );
console.log( Browser.secondName );








