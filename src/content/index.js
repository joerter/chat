var m = require('mithril'),
    messages = m.component(require('./messages')),
    input = m.component(require('./input'));

module.exports = {
    view: function(){
        return [
            m('.messages', messages),
            m('.input', input)
        ];
    }
};
