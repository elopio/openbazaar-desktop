// import _ from 'underscore';
import BaseModel from './BaseModel';
import app from '../app';
// import is from 'is_js';

export default class extends BaseModel {
  defaults() {
    return {
      // todo: update the attrs once server removes
      // capitalization.
      PaymentDataInQR: false,
      ShowNotifications: true,
      ShowNsfw: true,
      ShippingAddresses: [],
      // LocalCurrency: null,
      // Country: null,
      // Language: null,
      TermsAndConditions: '',
      RefundPolicy: '',
      BlockedNodes: [],
      StoreModerators: [],
      SMTPSettings: {},
    };
  }

  url() {
    return app.getServerUrl('ob/settings/');
  }

  // validate(attrs) {
  //   const errObj = {};
  //   const addError = (fieldName, error) => {
  //     errObj[fieldName] = errObj[fieldName] || [];
  //     errObj[fieldName].push(error);
  //   };

  //   if (attrs.email && is.not.email(attrs.email)) {
  //     addError('email', 'Please provide a valid email.');
  //   }

  //   if (Object.keys(errObj).length) return errObj;

  //   return undefined;
  // }

  sync(method, model, options) {
    // the server doesn't want the id field
    // options.attrs = options.attrs || model.toJSON(options);
    // delete options.attrs.id;

    // ensure certain fields that shouldn't be updated don't go
    // to the server
    // if (method !== 'read') {
      // delete options.attrs.followerCount;
      // delete options.attrs.followingCount;
      // delete options.attrs.listingCount;
      // delete options.attrs.lastModified;
    // }

    // if (method === 'read') {
    //   options.url = app.getServerUrl(`ob/settings/`);
    // } else {
    //   options.url = app.getServerUrl(`ob/settings/${app.profile.id !== model.id ? model.id : ''}`);
    // }

    return super.sync(method, model, options);
  }
}
