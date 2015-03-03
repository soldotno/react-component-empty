'use strict';

module.exports = function(React) {
    var toReturn = React.createClass({
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

    return React.createFactory(toReturn);
}
