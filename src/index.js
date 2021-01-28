
var User = require('./utils/User');

var roles = [
    { id: 1, name: "System Administrator", parent: 0 }, 
    { id: 2, name: "Location Manager", parent: 1 },
    { id: 3, name: "Supervisor", parent: 2 },
    { id: 4, name: "Employee", parent: 3 },
    { id: 5, name: "Trainer", parent: 3 }
];

var users = [
    { id: 1, name: "Adam Admin", role: 1 },
    { id: 2, name: "Emily Employee", role: 4 },
    { id: 3, name: "Sam supervisor", role: 3 },
    { id: 4, name: "Mary Manager", role: 2 },
    { id: 5, name: "Steve Trainer", role: 5 }
];
console.group('List of Roles');
console.table(roles);
console.groupEnd();
console.group('List of Users');
console.table(users);
console.groupEnd();

console.group('Get subordinates of supervisor user id 3');
console.table(User.getSubordinates(3, users, roles));
console.groupEnd();
console.group('Get subordinates of admin user id 1');
console.table(User.getSubordinates(1, users, roles));
console.groupEnd();

exports.roles = roles;
exports.users = users;