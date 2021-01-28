/**
 * * @param {any} property 
 * * @param {any} value 
 * * @param {Array<any>} arrayOfObjects 
 *  
 *  Util function get Object of an array (arrayOfObjects) by Id (value)
 *  this function can be replaced by ES6 function map, filter, find or underscore library function forEach
 */

function getObjectByProperty(property, value, arrayOfObjects) {
    if (!Array.isArray(arrayOfObjects) || arrayOfObjects.length === 0) { 
        return null;
    }
    
    for (var objectIndex = 0; objectIndex < arrayOfObjects.length; objectIndex++) {
        if (arrayOfObjects[objectIndex][property] === value) {
            return arrayOfObjects[objectIndex];
        }
    }

    return null;
}

exports.getObjectByProperty = getObjectByProperty;