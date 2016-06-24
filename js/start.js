import $ from 'jquery';
import Profile from './models/Profile';

// temporary until we get our server connection flow in place
window.baseApiUrl = 'http://localhost';

// bootstrap in BrowserSync
// https://github.com/BrowserSync/browser-sync/issues/1128
$.ajax('http://localhost:3000/browser-sync/browser-sync-client.2.13.0.js').done((data) => {
  $('<script />').appendTo($('body'))
    .text(data.replace('location.hostname', '(location.hostname || \'localhost\')'));
});

const profileMd = new Profile({ id: 'QmVGTT729Piv1kgzh14sRkphaD3n5HraN2eRRNUGdeF6xY' });

profileMd.fetch();
