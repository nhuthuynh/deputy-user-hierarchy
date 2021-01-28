/**
 * * @param {number} roleId - role id
 * * @param {Array<Role>} roles - list of user roles
 * * Get all subordinates' role id of the role id (including subordinates subordinate)
 **/

function getSubordinatesRoleId(roleId, roles) {
    if (!Array.isArray(roles) || roles.length === 0) {
        return [];
    }
    var subordinatesRoleId = [];
    for (var roleIndex = 0; roleIndex < roles.length; roleIndex++) {
        if (roles[roleIndex].parent === roleId) {
            subordinatesRoleId.push(roles[roleIndex].id);
            subordinatesRoleId = subordinatesRoleId.concat(getSubordinatesRoleId(roles[roleIndex].id, roles));
        }
    }
    return subordinatesRoleId;
}

exports.getSubordinatesRoleId = getSubordinatesRoleId;
