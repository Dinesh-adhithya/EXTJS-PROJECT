<script type="text/javascript">
    Ext.application({
        name: 'MyApp',

        requires: [
            'MyApp.view.main.MainController' // Load the controller
        ],

        launch: function () {
            Ext.create('Ext.container.Container', {
                renderTo: Ext.getBody(), // Attach to the body
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                width: '100%',
                height: '100vh',

                items: [{
                    xtype: 'button',
                    text: 'Click Me!',
                    scale: 'medium',
                    margin: 20,
                    handler: function () {
                        Ext.Msg.alert('Button Clicked', 'Hello! This is an alert message.');
                    }
                }]
            });
        }
    });
</script>
