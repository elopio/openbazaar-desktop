import { Model, sync } from 'backbone';

export default class Profile extends Model {
  constructor(options) {
    super(options);

    // url is handled by sync, but backbone bombs if I don't have
    // something explicitly set
    this.url = 'use-sync';
  }

  sync(method, model, options) {
    const opts = { ...options };

    if (method === 'read') {
      opts.url = `${window.baseApiUrl}/ipns/${model.id}/profile`;
    } else if (method === 'update') {
      opts.url = `${window.baseApiUrl}/profile/${model.id}`;
    }

    return sync(method, model, opts);
  }
}
