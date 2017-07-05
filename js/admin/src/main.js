import { extend } from 'flarum/extend';
import app from 'flarum/app';

import BFTNSettingsModal from 'franzl/battleforthenet/components/BFTNSettingsModal';

app.initializers.add('franzl-battleforthenet', () => {
  app.extensionSettings['franzl-battleforthenet'] = () => app.modal.show(new BFTNSettingsModal());
});
