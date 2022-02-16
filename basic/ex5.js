function size(widht, hight, depht) {
    return widht + hight + depht;
}
var area = (function(size) {
    var width = 2;
    var height = 7;
    return width * height;
}());
var wolume = (function(size) {
    var width = 7;
    var height = 10;
    return width * height;
}());
console.log("The area of the box is:" + area)
console.log("The volume of the box is:" + wolume)