'use strict';

function sorting(objectsArray, fieldsArray) {
    // control params number
    if(arguments.length !== 2) {
        return null;
    }

    // control type of params
    if(!Array.isArray(objectsArray) || !Array.isArray(fieldsArray)) {
        return null;
    }

    // control size of objects array
    if(objectsArray.length === 0) {
        return [];
    }

    objectsArray.sort((first, second) => {
        let answerFound = false;
        let shouldChange = false;

        fieldsArray.forEach((fieldName) => {
            // if two params are not strings
            if(typeof(first[fieldName]) !== "string" && typeof(second[fieldName]) !== "string") {
                if (!answerFound) {
                    if (first[fieldName] > second[fieldName]) {
                        shouldChange = answerFound = true;
                    } else if (first[fieldName] < second[fieldName]) {
                        answerFound = true;
                    }
                }
            } else {
                if (first[fieldName].localeCompare(second[fieldName]) === 1) {
                    shouldChange = answerFound = true;
                } else if (first[fieldName].localeCompare(second[fieldName]) === -1) {
                    answerFound = true;
                }
            }
        });

        return shouldChange;
    });

    return objectsArray;
}
