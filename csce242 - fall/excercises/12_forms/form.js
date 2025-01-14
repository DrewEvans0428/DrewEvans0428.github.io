document.getElementById("form-racoon").onsubmit = () => {
    e.preventDefault(); //dont go to action stay on page
    
    const form = e.target;

    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termsChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");

    console.log(`${racconName} is ${size}, sized and has a ${demeanor} demeanor`);
};

const getRadioValue = (radioElement) => {
    const radios = document.getElementsByName(radioName);

    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }

    return "";
};