Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onButtonClick: function () {
        Ext.Msg.alert('Button Clicked', 'Hello! This is an alert message.');
    }
});
