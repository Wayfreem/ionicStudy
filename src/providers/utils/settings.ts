import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Settings {
  private SETTINGS_KEY: string = '_settings';

  settings = {};

  constructor(public storage: Storage) {

  }

  merge(settings: any) {
    for (let k in settings) {
      this.settings[k] = settings[k];
    }
    return this.save();
  }

  setValue(key: string, value: any) {
    this.settings[key] = value;
    return this.storage.set(this.SETTINGS_KEY, this.settings);
  }

  setAll(value: any) {
    return this.storage.set(this.SETTINGS_KEY, value);
  }

  getValue(key: string) {
    return this.storage.get(this.SETTINGS_KEY)
      .then(settings => {
        return settings[key];
      });
  }

  save() {
    return this.setAll(this.settings);
  }

  get allSettings() {
    return this.settings;
  }

  removeKey(key: string){
    return this.storage.remove(this.settings[key]);
  }
}
