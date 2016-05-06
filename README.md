<!DOCTYPE html>
<html>
<head>
</head>
<body>
   <form method = "post" action = "/echo/html">
       <input type = "hidden" name = "html" value = "&lt;p&gt;Item added to your cart&lt/p&gt;"/>
       <input type = "submit" value = "Add to Cart"/>
   </form>
   <div id = "confirmBox">
       <div class = "message"></div>
       <span class = "button yes">I need this</span>
       <span class = "button no">I won't buy this</span>
   </div>

    <h1>Are you sure you need this item?</h1>

    <!--<button id = "learnMore">Click to learn more</button>-->
    <script>
        document.getElementById("leanMore").addEventListener("click", info);

        function info()
        {

        }
    </script>

        <h2>Best High-yield Savings Accounts</h2>
            <p><a href = "https://www.synchronybank.com/banking/products/high-yield-saving/">Synchrony Bank: 1.05% APY</a></p>
            <p></p>
            <p><a href = "https://www.ally.com/bank/online-savings-account/">Ally Bank: 1.00% APY</a></p>
            <p></p>
            <p><a href = "https://www.banking.barclaysus.com/online-savings.html">Barclays Online Savings: 1.00% APY</a></p>
            <p></p>

        <h2>S&P 500 Stock Ticker</h2>

    <!-- TradingView Widget BEGIN -->
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
    <!-- TradingView Widget END -->
<h1></h1>
<button id = "yes">I need this</button>
<button id = "no">I won't buy this</button>
</body>

</html>
