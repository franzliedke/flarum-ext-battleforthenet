'use strict';

System.register('franzl/battleforthenet/main', ['flarum/app'], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }],
    execute: function () {

      app.initializers.add('franzl-battleforthenet', function () {
        // Don't do anything if the day has not (yet?) come
        if (!app.forum.attribute('btfnWidgetShow')) {
          return;
        }

        var theme = app.forum.attribute('btfnWidgetTheme');

        // Specify the theme to use if a valid one has been chosen
        if ($.inArray(theme, ['money', 'slow', 'stop']) > -1) {
          window._bftn_options = { theme: theme };
        }

        // If we get to this point, load the widget script and let it decide whether
        // anything should be displayed
        $.getScript('//widget.battleforthenet.com/widget.js');
      }, -200);

      // We add this initializer with priority -200 to make sure the "preload"
      // initializer has been run before, as we need to have the forum attributes
      // available to decide what to do based on the config.
    }
  };
});