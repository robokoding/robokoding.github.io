var cookiesEnabled = false;

window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        "type": "opt-in",
        "position": "bottom-right",
        content: {
            message: 'Please allow cookies to enable all features of this website.'
        },
        "palette": {
            "popup": {
                "background": "#242943ff"
            },
            "button": {
                "background": "#ffd500ff"
            }
        },
        onInitialise: function (status) {
            // When cookies are allowed
            if (status == 'allow') {
                cookiesEnabled = true;
            }
        },
        onStatusChange: function(status, chosenBefore) {
            // When cookies are allowed
            if (status == 'allow') {
                cookiesEnabled = true;
            // When cookies are disabled
            } else {
                cookiesEnabled = false
            }
        }
    })
});
