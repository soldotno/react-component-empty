# react-component-empty
An empty React component that doesn't output anything and doesn't update.

About
=====
Makes it easy to turn off some failing component without making lots of changes to your code.

    var FailingComponent = false ? require('failing-component') : require('react-component-empty');
    // ...
    render: function() {
        return <FailingComponent/>
    }
