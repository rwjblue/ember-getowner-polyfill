'use strict';

module.exports = async function() {
  return {
    useYarn: true,
    scenarios: [
    {
      name: 'ember-1.10',
      bower: {
        dependencies: {
          "ember": "~1.10.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-1.11',
      bower: {
        dependencies: {
          "ember": "~1.11.3"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-1.12',
      bower: {
        dependencies: {
          "ember": "~1.12.1"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-1.13',
      bower: {
        dependencies: {
          "ember": "~1.13.8"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.0',
      bower: {
        dependencies: {
          "ember": "~2.0.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.1',
      bower: {
        dependencies: {
          "ember": "~2.1.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.2',
      bower: {
        dependencies: {
          "ember": "~2.2.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.3',
      bower: {
        dependencies: {
          "ember": "~2.3.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.4',
      bower: {
        dependencies: {
          "ember": "~2.4.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.8',
      bower: {
        dependencies: {
          "ember": "~2.8.0"
        }
      },
      npm: {
        devDependencies: {
          "ember-source": null
        }
      }
    },
    {
      name: 'ember-2.12',
      npm: {
        devDependencies: {
          "ember-source": "~2.12.0"
        }
      }
    },
    ]
  };
};
