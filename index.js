function myEach(collection, alert) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            console.log(alert(collection[i])); 
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                console.log(alert(collection[key])); 
            }
        }
    }
    return collection;
}

function alert(value) {
    return `value: ${value}`;
}

myEach([1, 2, 3], alert);            
myEach({ one: 1, two: 2 }, alert); 


function myMap(collection, callback) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection)); // value, index, collection
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection)); // value, key, collection
            }
        }
    }

    return result;
}

function myReduce(collection, callback, acc) {
   
    let isArray = Array.isArray(collection);
    let keys = isArray ? collection : Object.keys(collection);

   
    let startIndex = 0;

    if (acc === undefined) {
        acc = collection[isArray ? 0 : keys[0]];
        startIndex = 1;
    }

   
    for (let i = startIndex; i < keys.length; i++) {
        let key = isArray ? i : keys[i];
        acc = callback(acc, collection[key], collection); 
    }

    return acc;
}

function myFind(collection, predicate) {
   
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } 
   
    else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key])) {
                return collection[key];
            }
        }
    }

   
    return undefined;
}


function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (collection.hasOwnProperty(key) && predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    }

    return result;
}
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}
function myFirst(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}
function myLast(array, n) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }

    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return [];
    }

    return Object.keys(obj);
}
function myValues(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return [];
    }

    return Object.values(obj);
}