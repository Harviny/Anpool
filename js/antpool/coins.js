/**
 * Created by ding on 2015/8/28.
 */
/**
 * Created by bitmain on 2015/7/23.
 */
//$(document).ready(function(){
//    pay_the_money();
//});
function pay_the_money(address){
    var input_number = document.getElementById("coins-number").value;
    //var input_number = $("#coins-number")[0].value;
    var decimal_index = input_number.indexOf(".")+1;
    if(decimal_index == 0){
        decimal_index=input_number.length;
    }
    var decimal = input_number.length - decimal_index;
    document.getElementById("qrCodeImg").src="";
    if( input_number >= 1 && ( decimal_index == 0 || decimal <= 8)){
        var ratio = document.getElementById("ratio").value;
        var pay_money = accMul(input_number,ratio).toFixed(8);
        //var pay_money = (input_number * ratio).toFixed(2);
        document.getElementById("pay-money").innerText = pay_money;
        //$('#pay-money').html(pay_money);
        document.getElementById("qrCodeImg").src="https://blockchain.info/qr?data=bitcoin://"+address+"?amount="+pay_money+"&#038;size=194";
    }
    else{
        document.getElementById("pay-money").innerText = 0;
        //$("#pay-money").html("0");
    }
}
function show_search_btn(){
    var input_number = document.getElementById("search-text").value;
    if(input_number != undefined){
        document.getElementById("search-btn").style.cssText = "display: inline-block;";
        document.getElementById("search-btn-picture").style.cssText = "display: inline-block;";
        document.getElementById("search-text").removeAttribute("placeholder");
    }
}

function show_user_trading(){
    document.getElementById("search-id").style.cssText = "display: block;";
    document.getElementById("your-Trading").style.cssText = "display: block;";
}

