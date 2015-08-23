var Firebase = require('firebase');
var chatRef = new Firebase("https://codeone-chat.firebaseio.com/");
var messagesRef = chatRef.child('messages');

module.exports = {
    saveMessage : saveMessage,
    onMessages : onMessages
};

function saveMessage(message) {
    messagesRef.push(message);
};

function onMessages(callback) {
    messagesRef.on("value", function(snapshot) {
        var messages = [], messagesObj = snapshot.val();
        for(var key in messagesObj){
            messages.push({ id: key, text: messagesObj[key] });
        }
        return callback(messages);
    }, function (errorObject) {
        console.error("The read failed: " + errorObject.code);
    });
};
