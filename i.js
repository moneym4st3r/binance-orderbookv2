//?asset=BNB&quote=BUSD&precision=2&limit=100&bidUp=400&bidDown=200&askUp=400&askDown=200


$("#loadOrderBook").click(function(){

    var asset = $("#assetInput").val();
    var quote = $("#quoteInput").val();
    var precision = $("#pricePrecision").val();
    var limit = $("#orderLimit").val();
    var bidUp = $("#upLimitBidInput").val();
    var bidLow = $("#dnLimitBidInput").val();
    var askUp = $("#upLimitAskInput").val();
    var askLow = $("#dnLimitAskInput").val();


var url = "orderbook.html?asset="+asset+"&quote="+quote+"&precision="+precision+"&limit="+limit+"&bidUp="+bidUp+"&bidDown="+bidLow+"&askUp="+askUp+"&askDown="+askLow;


window.location.href = url;
});