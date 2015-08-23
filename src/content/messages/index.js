var m = require('mithril'),
    firebase = require('../../firebase');

module.exports = {
    view: function(ctrl){
        return m('div', ctrl.messages.map(function (message) {
            return m('.message', message.text);
        }));
    },
    controller: function() {
        var vm = this;
        vm.messages = [];

        firebase.onMessages(function (messages) {
            vm.messages = messages;
            m.redraw();
        });
    }
};
