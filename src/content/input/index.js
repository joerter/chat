var m = require('mithril'),
firebase = require('../../firebase');

module.exports = {
    view: function(ctrl){
        return m('div', [
            m('input[type="text"]', { value: ctrl.message(), oninput: m.withAttr('value', ctrl.message) }),
            m('button', {onclick: ctrl.save }, 'Send Message')
        ]);
    },
    controller: function () {
        var vm = this;
        vm.message = m.prop('');
        this.save = function () {
           if(!vm.message()){
               return;
           }

           firebase.saveMessage(vm.message());
           vm.message('');
        };
    }
};
