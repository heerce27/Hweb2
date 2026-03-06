function setMood(mood)
{
    let message = "";

    if(mood == "happy")
        message = "That's great! Keep smiling 😊";

    else if(mood == "sad")
        message = "Hope things get better soon 💙";

    else if(mood == "excited")
        message = "Awesome! Enjoy the moment 🤩";

    else if(mood == "tired")
        message = "Maybe take a rest 😴";

    document.getElementById("response").innerHTML = message;
}