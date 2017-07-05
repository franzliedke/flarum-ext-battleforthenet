import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';

export default class BFTNSettingsModal extends SettingsModal {
  className() {
    return 'BFTNSettingsModal Modal--small';
  }

  title() {
    return 'BattleForTheNet Settings';
  }

  form() {
    return [
      <div className="Form-group">
        <label>Theme</label>
        <div className="helpText">
          Choose one of the three special themes or the default theme.
          You can <a href={app.forum.attribute('baseUrl') + '/?always_show_bftn_widget=1#ALWAYS_SHOW_BFTN_WIDGET'} target="_blank">preview the result here</a>.
        </div>
        <select bidi={this.setting('franzl-battleforthenet.theme')}>
          <option value="default">Default</option>
          <option value="money">Money</option>
          <option value="slow">Slow</option>
          <option value="stop">Stop</option>
        </select>
      </div>
    ];
  }
}
