document.getElementById('save').onclick = () => {
    const url = document.getElementById('url').value;
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;

    chrome.cookies.set(
        {
            url: url, name: name, value: value
        }, (data) => console.log(data)
    );

}
