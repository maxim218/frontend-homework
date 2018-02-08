'use strict';

function sorting(objectsArray, fieldsArray) {
    if(objectsArray.length === 0) {
        return [];
    }

    objectsArray.sort(function(first, second) {
        for(let i = 0; i < fieldsArray.length; i++) {
            const fieldName = fieldsArray[i];
            if(first[fieldName] > second[fieldName]) {
                return true;
            }else if(first[fieldName] < second[fieldName]) {
                return false;
            }
        }
        return false;
    });

    return objectsArray;
}
