





function dismiss() {
    var cookie = document.querySelector(".cookie")

    cookie.remove();
}


document.getElementById("selectTemp").onchange = function () {
    var value = document.getElementById("selectTemp").value;
    console.log(value)
    if (value == "value1") {


        var fTemp = document.getElementsByClassName("high")
        for (var i = 0; i < fTemp.length; ++i) {
            var item = fTemp[i];
            var n = item.innerHTML;
            var fToCel = (n - 32) * 5 / 9;
            console.log(fToCel);
            item.innerText = fToCel;
        }

        var fTempL = document.getElementsByClassName("low")
        for (var i = 0; i < fTempL.length; ++i) {
            var item = fTempL[i];
            var n = item.innerHTML;
            var fToCel = (n - 32) * 5 / 9;
            console.log(fToCel);
            item.innerText = fToCel;
        }


    }
    else {

        var cTemp = document.getElementsByClassName("high");
        for (var i = 0; i < cTemp.length; ++i) {
            var item = cTemp[i]
            var num = item.innerHTML;
            var cToFahr = num * 9 / 5 + 32;

            item.innerHTML = cToFahr;
            console.log(cToFahr);
        }

        var cTempL = document.getElementsByClassName("low");
        for (var i = 0; i < cTempL.length; ++i) {
            var item = cTempL[i]
            var num = item.innerHTML;
            var cToFahr = num * 9 / 5 + 32;

            item.innerHTML = cToFahr;
            console.log(cToFahr);
        }


    }


}







