var ConstructorDemo = (function () {
    function ConstructorDemo(userName, num) {
        this.userName = userName;
        this.luckyNumber = num;
    }
    ConstructorDemo.prototype.getMessage = function () {
        return "Hi " + this.userName + " your Lucky Number is: " + this.luckyNumber;
    };
    return ConstructorDemo;
}());
