var employee1 = { firstName: "saha", lastName: "yogesh" };
var employee2 = { firstName: "sy", lastName: "tamilan" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); 
invite.call(employee2, "Hello", "How are you?"); 