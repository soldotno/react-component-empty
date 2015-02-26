'use strict';

var React = require('react');

module.exports = React.createClass({
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
