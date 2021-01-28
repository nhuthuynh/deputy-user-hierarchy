var Util = require('./Util');
var Role = require('./Role');

/**
 * @param {number} userId - user's id
 * @param {Array<User>} users - list of user object 
 * @param {Array<Role>} roles - list of role object
 * Get user id and return an array of subordinates (including subordinates of subordinates) of that user id
 *  1. Get user role id
 *  2. Get list of subordinates' role id (including subordinate of subordinate)
 *  3. Select users based on the list of subordinates' role id
 */

function getSubordinates(userId, users, roles) {
    if (!Array.isArray(users) || !Array.isArray(roles)) return [];
    var subordinates = [],
        currentUser = Util.getObjectByProperty('id', userId, users);
    if (currentUser) {
        var subordinatesRoleId = Role.getSubordinatesRoleId(currentUser.id, roles);
        for (var userIndex = 0; userIndex < users.length; userIndex++) {
            if (subordinatesRoleId.indexOf(users[userIndex].role) !== -1) {
                subordinates.push(users[userIndex]);
            }
        }
    }

    return subordinates;
}

exports.getSubordinates = getSubordinates;