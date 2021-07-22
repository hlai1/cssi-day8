const messagesRef = firebase.database().ref();

messagesRef.push({
    message:  "This was made with javascript",
    passcode: "javascript"
})