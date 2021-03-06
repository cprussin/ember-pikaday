import Ember from 'ember';
import moment from 'moment';

export default {
  name: 'setup-pikaday-i18n',
  initialize: function(container, application) {
    var i18n = Ember.Object.extend({
      previousMonth: 'Vorheriger Monat',
      nextMonth: 'Nächster Monat',
      months: moment.localeData()._months,
      weekdays: moment.localeData()._weekdays,
      weekdaysShort: moment.localeData()._weekdaysShort,
      midnight: 'Mitternacht',
      noon: 'Mittag'
    });

    container.register('pikaday-i18n:main', i18n, { singleton: true });
    application.inject('component:pikaday-input', 'i18n', 'pikaday-i18n:main');
  }
};
