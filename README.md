<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <script type = "text">
        function getCurrentTabUrl(callback)
    {
        var queryInfo =
        {
            active: true;
            currentWindow: true;
        };
        chrome.tabs.query(queryInfo, function(tabs)
        {
            var tab = tabs[0];
            var url = tab.url;
            console.assert(typeof url == 'string', 'tab.url should be a string');
            callback(url);
        });
    </script>

    <!--<a href = "https://www.amazon.com/gp/cart/view.html/ref=lh_cart_vc_btn"></a>-->
    <script type = "text/javascript">
        function Disable()
        {
            document.getElementsByClassName("sc-proceed-to-checkout").disabled = true;
            var elems = document.getElementsByClassName("sc-proceed-to-checkout").getElementsByTagName("*");
            for (var i = 0; i < elems.length; i++)
            {
                elems[i].disabled = true;
            }
        }
    </script>

    <h1>Are you sure?</h1>

    <script type="text/javascript" src="https://d33t3vvu2t2yu5.cloudfront.net/tv.js"></script>
    <script type="text/javascript">
        new TradingView.widget({
            "width": 980,
            "height": 610,
            "symbol": "FX:SPX500",
            "interval": "D",
            "timezone": "exchange",
            "theme": "White",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "allow_symbol_change": true,
            "hideideas": true,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650"
        });
    </script>


</body>
</html>
