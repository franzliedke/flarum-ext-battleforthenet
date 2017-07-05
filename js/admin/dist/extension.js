'use strict';

System.register('franzl/battleforthenet/components/BFTNSettingsModal', ['flarum/app', 'flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var app, SettingsModal, BFTNSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      BFTNSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(BFTNSettingsModal, _SettingsModal);

        function BFTNSettingsModal() {
          babelHelpers.classCallCheck(this, BFTNSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (BFTNSettingsModal.__proto__ || Object.getPrototypeOf(BFTNSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(BFTNSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'BFTNSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'BattleForTheNet Settings';
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Theme'
              ),
              m(
                'div',
                { className: 'helpText' },
                'Choose one of the three special themes or the default theme. You can ',
                m(
                  'a',
                  { href: app.forum.attribute('baseUrl') + '/?always_show_bftn_widget=1#ALWAYS_SHOW_BFTN_WIDGET', target: '_blank' },
                  'preview the result here'
                ),
                '.'
              ),
              m(
                'select',
                { bidi: this.setting('franzl-battleforthenet.theme') },
                m(
                  'option',
                  { value: 'default' },
                  'Default'
                ),
                m(
                  'option',
                  { value: 'money' },
                  'Money'
                ),
                m(
                  'option',
                  { value: 'slow' },
                  'Slow'
                ),
                m(
                  'option',
                  { value: 'stop' },
                  'Stop'
                )
              )
            )];
          }
        }]);
        return BFTNSettingsModal;
      }(SettingsModal);

      _export('default', BFTNSettingsModal);
    }
  };
});;
'use strict';

System.register('franzl/battleforthenet/main', ['flarum/extend', 'flarum/app', 'franzl/battleforthenet/components/BFTNSettingsModal'], function (_export, _context) {
  "use strict";

  var extend, app, BFTNSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_franzlBattleforthenetComponentsBFTNSettingsModal) {
      BFTNSettingsModal = _franzlBattleforthenetComponentsBFTNSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('franzl-battleforthenet', function () {
        app.extensionSettings['franzl-battleforthenet'] = function () {
          return app.modal.show(new BFTNSettingsModal());
        };
      });
    }
  };
});