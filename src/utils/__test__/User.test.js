var User = require('../User.js');
var index = require('../../index.js');

describe('User utility functions', function() { 
    describe('getSubordinates -> get every subordinates of an user', function() { 
        test('when passing an admin user id, return a list of subordinates (employees, supervisors, managers, trainers)', function() {
            // setup
            var users = index.users, roles = index.roles,
                adminId = 1,
                expected = [
                { id: 2, name: "Emily Employee", role: 4 }, 
                { id: 3, name: "Sam supervisor", role: 3 },
                { id: 4, name: "Mary Manager", role: 2 },
                { id: 5, name: "Steve Trainer", role: 5 }
            ];
            
            // act
            var actual = User.getSubordinates(adminId, users, roles);
            
            // assert
            expect(expected.sort()).toEqual(actual.sort());
        });

        test('when passing a supervisor user id, return a list of subordinates (employees and trainers)', function() {
            // setup
            var users = index.users, roles = index.roles,
                supervisorId = 3,
                expected = [
                { id: 2, name: "Emily Employee", role: 4 },
                { id: 5, name: "Steve Trainer", role: 5 }
            ];
            
            // act
            var actual = User.getSubordinates(supervisorId, users, roles);
            
            // assert
            expect(expected.sort()).toEqual(actual.sort());
        });

        test('when passing an employee user id, return empty a list', function() {
            // setup
            var users = index.users, roles = index.roles,
                employeeId = 4,
                expected = [];

            // act
            var actual = User.getSubordinates(employeeId, users, roles);
            
            // assert
            expect(expected).toEqual(actual);
        });

        test('when passing a trainer user id, return empty a list', function() {
            // setup
            var users = index.users, roles = index.roles,
                trainerId = 5,
                expected = [];
            
            // act
            var actual = User.getSubordinates(trainerId, users, roles);
            
            // assert
            expect(expected).toEqual(actual);
        });

        test('when passing non existed user (with id does not exist in users), return empty a list', function() {
            // setup
            var users = index.users, roles = index.roles,
                nonExistedUserId = 10,
                expected = [];
            
            // act
            var actual = User.getSubordinates(nonExistedUserId, users, roles);
            
            //assert
            expect(expected).toEqual(actual);
        });
    });
});