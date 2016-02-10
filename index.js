'use strict';
var React = require('react')

module.exports = function() {
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
