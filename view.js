Ti.App.View = Class.extend({
    init: function(win, controller)
    {
        this.win = win;
        this.controller = controller;

        win.viewClass = this;
    }
});
