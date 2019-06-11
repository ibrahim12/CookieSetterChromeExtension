
chrome.cookies.set(
    {
        url: 'https://histre-dev01.appspot.com', name: 'DEV_NOREDIRECT', value: "true"
    }, (data) => console.log(data)
);
