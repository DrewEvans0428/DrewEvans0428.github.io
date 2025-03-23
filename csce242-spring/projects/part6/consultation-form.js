//https://web3forms.com
const form = document.getElementById("consultation-form");
const result = document.getElementById("result");

form.addEventListener('submit', function(e){
    e.preventDefault();

    result.style.display = "block";
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "please wait..."

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200){
            result.innerHTML = "form submitted successfully";
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
    });
});