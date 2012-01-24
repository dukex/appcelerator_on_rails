Ti.include("/lib/appcelerator_on_rails/core_ext/string.js");

Ti.App.Controller = Ti.App.Class.extend({
  init: function(win, name)
  {
    this.win = win;
    win.controllerClass = this;

    Ti.include("/views/" + name + ".js");
    var class_view = ("" + name + "_view").classify();
    this.view = new Ti.App[class_view](win, this);
  }
});
