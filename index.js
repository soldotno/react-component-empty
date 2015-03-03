'use strict';

module.exports = function(React) {
    return React.createClass({
        displayName: 'EmptyComponent',

        getInitialState: function () {
            return null;
        },

        shouldComponentUpdate: function() {
            return false;
        },

        render: function() {
            return null;
        }
    });
}
