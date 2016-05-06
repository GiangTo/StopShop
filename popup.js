chrome.browserAction.onClicked.addListener (function(tab)
{
    var actionUrl = 'javascript: document.getElementById("submit.add-to-cart-announce").innerText = "Do you NEED this?";';
    chrome.tabs.update(tab.id, {url: actionUrl});
});

chrome.browserAction.onClicked.addListener(function (tab)
{
    var myAction = 'javascript: document.getElementById("submit.add-to-cart").addEventListener("mouseover", function()' +
        '{' +
            'return confirm("Are you sure?");' +
        '})'
            /*'function doConfirm(msg, yesFn, noFn)' +
            '{' +

                'var confirmBox = $("confirmBox");' +
                'confirmBox.find(".message").text(msg);' +
                'confirmBox.find(".yes, .no").unbind().click(function()' +
                '{' +
                    'confirmBox.hide();' +
                    'confirmBox.prev().remove();' +
                '});' +
                'confirmBox.find(".yes").click(yesFn);' +
                'confirmBox.find(".no").click(noFn);' +
                'confirmBox.show();' +

                'var overlay = $("<div>").css({' +
                    'position: "fixed",' +
                    'top: 0,' +
                    'left: 0,' +
                    'right: 0,' +
                    'bottom: 0,' +
                    'backgroundColor: "rgba(255, 255, 255, 0.5)"' +
                    '}).insertBefore(confirmBox);' +
        '}' +

        '$(function() {' +
            '$("form").submit(function (e) {' +
                'e.preventDefault();' +
                'var form = this;' +
                'doConfirm()'

            '}'
        '});';*/
    chrome.tabs.update(tab.id, {url: myAction});
});
