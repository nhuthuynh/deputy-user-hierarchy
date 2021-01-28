var Role = require('../Role.js');
var index = require('../../index.js');

describe('Role utility functions', function() { 
    describe('getSubordinatesRoleId -> get list of subordinates role id by role id', function () {
        test('when passing an admin role id, it should return id list of managers, supervisor, employees and trainers', function() {
            var roles = index.roles,
                adminRole = 1,
                expected = [4, 3, 2, 5];
            
            var actual = Role.getSubordinatesRoleId(adminRole, roles);
            
            expect(expected).toEqual(expect.arrayContaining(actual));
        });

        test('when passing a supervisor role id, it should return id list of employees and trainers', function() {
            var roles = index.roles,
                supervisorRole = 3,
                expected = [4, 5];
            
            var actual = Role.getSubordinatesRoleId(supervisorRole, roles);
            
            expect(expected).toEqual(expect.arrayContaining(actual));
        });

        test('when passing an employee role id, it should return empty list', function() {
            var roles = index.roles,
                employeeRole = 4,
                expected = [];
            
            var actual = Role.getSubordinatesRoleId(employeeRole, roles);
            
            expect(expected).toEqual(expect.arrayContaining(actual));
        });

        test('when passing a trainer role id, it should return empty list', function() {
            var roles = index.roles,
                trainerRole = 5,
                expected = [];
            
            var actual = Role.getSubordinatesRoleId(trainerRole, roles);
            
            expect(expected).toEqual(expect.arrayContaining(actual));
        });

        test('when passing an role id that does not exist in the roles, it should return empty list', function() {
            var roles = index.roles,
                unknownRole = 10,
                expected = [];
            
            var actual = Role.getSubordinatesRoleId(unknownRole, roles);
            
            expect(expected).toEqual(expect.arrayContaining(actual));
        });
    });
});