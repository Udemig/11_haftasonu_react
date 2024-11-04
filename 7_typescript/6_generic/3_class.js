var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var numbers = new Sorter([9, 3, 6, 1, 5]);
console.log(numbers.sortData());
