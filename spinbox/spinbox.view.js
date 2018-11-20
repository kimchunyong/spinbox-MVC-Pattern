(function (exports) {
    function SpinboxView() {

    }
    SpinboxView.prototype = {
        render: function (value) {
            var result = document.getElementsByClassName('result')[0]
            result.value = value
        }
    }
    exports.SpinboxView = SpinboxView;
})(this);