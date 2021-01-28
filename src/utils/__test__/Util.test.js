var Util = require('../Util.js');
var index = require('../../index.js');

describe('General utility functions', function () {
    describe('getObjectByProperty -> get object from an array by passing property name of a object and property value', function() { 
        test('when passing an admin user id, property name id and list of user, it should return an admin object', function() {
            var users = index.users,
                adminId = 1,
                propertyNameofUserObject = 'id',
                expected = users[0];

            var actual = Util.getObjectByProperty(propertyNameofUserObject, adminId, users);

            expect(expected).toMatchObject(actual);
        });

        test('when passing employee user id, property name id and list of user, it should return an employee object', function() {
            var users = index.users,
                employeeId = 2,
                propertyNameofUserObject = 'id',
                expected = users[1];

            var actual = Util.getObjectByProperty(propertyNameofUserObject, employeeId, users);

            expect(expected).toMatchObject(actual);
        });

        test('when passing a location manager role id, property name id and list of roles, it should return an location manager object', function() {
            var roles = index.roles,
                managerRoleId = 2,
                propertyNameofRoleObject = 'id',
                expected = roles[1];

            var actual = Util.getObjectByProperty(propertyNameofRoleObject, managerRoleId, roles);

            expect(expected).toMatchObject(actual);
        });

        test('when passing list of roles, property id, and an id not equal to any id in the list, it should return null', function() {
            var roles = index.roles,
                unknownId = 10,
                propertyNameofUserObject = 'id';

            var actual = Util.getObjectByProperty(propertyNameofUserObject, unknownId, roles);

            expect(actual).toBeNull();
        });

        test('when passing property name not belong to object in the list, it should return null', function() {
            var roles = index.roles,
                testValue = 'test',
                propertyNameNotBelongToRoleObject = 'test';

            var actual = Util.getObjectByProperty(propertyNameNotBelongToRoleObject, testValue, roles);

            expect(actual).toBeNull();
        });
});
});