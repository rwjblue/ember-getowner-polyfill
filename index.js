'use strict';

var VersionChecker = require('ember-cli-version-checker');
var hasBeenWarned = false;

module.exports = {
  name: require('./package').name,
  included() {
    this._super.included.apply(this, arguments);

    this._ensureThisImport();

    var checker = new VersionChecker(this);
    var emberVersion = checker.forEmber();

    if (emberVersion.lt('2.3.0')) {
      this.import('vendor/install-getowner-polyfill.js');
    } else if (this.parent === this.project && !hasBeenWarned){
      console.warn('ember-getowner-polyfill is not required for Ember 2.3.0 and later, please remove from your `package.json`.');
      hasBeenWarned = true;
    }
  },

  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        var current = this;
        var app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        var app = this._findHost();
        app.import(asset, options);
      };
    }
  },

  treeForVendor(rawVendorTree) {
    let babelAddon = this.addons.find(
      addon => addon.name === 'ember-cli-babel'
    );

    let transpiledVendorTree = babelAddon.transpileTree(rawVendorTree, {
      babel: this.options.babel,

      'ember-cli-babel': {
        compileModules: false,
      },
    });

    return transpiledVendorTree;
  },
};
