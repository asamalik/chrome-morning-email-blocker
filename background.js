chrome.webRequest.onBeforeRequest.addListener(
    page => {
        var today = new Date().getHours();
        if (today >= 8 && today < 12) {
            return {
                cancel: true,
            };
        } else {
            return {
                cancel: false,
            };
        }
    },
    {
        urls: [
            '*://mail.google.com/*',
        ],
    },
    ["blocking"],
);
