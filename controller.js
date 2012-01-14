Ti.App.Controller = Class.extend({
    init: function(win, name)
    {
      this.win = win
      win.controllerClass = this;

      Ti.include("/views/" + name + ".js");
      var class_view = (name + "_view").classify();
      this.view = new Ti.App[class_view](win, this);
    }
});
