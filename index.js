/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-pikaday',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/pikaday-time/pikaday.js');
    app.import(app.bowerDirectory + '/pikaday-time/css/pikaday.css');
  }
};
