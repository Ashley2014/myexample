
var createGroupedArray = function(arr, chunkSize) {
    var groups = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize));
    }
    return groups;
}