let result = {

        "tag": "",
        "free": true,
        "role": false,
        "user": "ilyasdosary",
        "email": "ilyasdosary@gmail.com",
        "score": 0.64,
        "state": "deliverable",
        "domain": "gmail.com",
        "reason": "valid_mailbox",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": true,
        "did_you_mean": "",
        "format_valid": true
}

Submitbtn.addEventListener("click", async (e) => {
        e.preventDefault();
        resultCont.innerHTML = `<img src="images/loading.svg" alt="loading" width="110px">`;
        let key = 'ema_live_S20Awy8ugJrYeipT3YftGflACp0T8tzsICz75zcv';
        let email = document.getElementById("email");
        let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email.value}`;
        let res = await fetch(url);
        let result = await res.json();
        let str = '';
        for (key of Object.keys(result)) {
                if (result[key] !== "" && result !== " ") {
                        str += `<div>${key} : ${result[key]}</div>`
                }
        }

        resultCont.innerHTML = str;
})