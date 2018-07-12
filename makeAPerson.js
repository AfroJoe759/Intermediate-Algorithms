//Solution 1
var Person = function(firstAndLast) {
  let fullName = firstAndLast;
  let nameArr = fullName.split(" ");

  this.setFirstName = (firstName) => {
    nameArr[0] = firstName;
    fullName = nameArr[0] + " " + nameArr[1];
  }

  this.setLastName = (lastName) => {
    nameArr[1] = lastName;
    fullName = nameArr[0] + " " + nameArr[1];
  }

  this.setFullName = (completeName) => {
    nameArr = completeName.split(" ");
    fullName = nameArr[0] + " " + nameArr[1];
  }

  this.getFirstName = () => {
    return nameArr[0];
  }

  this.getLastName = () => {
    return nameArr[1]
  }
  this.getFullName = () => {
    return fullName;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
