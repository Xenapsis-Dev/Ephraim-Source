if (localStorage.getItem('tracking') != "false") {
    const formdata = new FormData(form);
    for (const item of formdata) {
        console.log()
        fetch('https://httpbin.org/post', {
            method: "POST",
            body: formdata,
        })
            .then(res=> res.json())
            .then(res => console.log(res))
    }
}