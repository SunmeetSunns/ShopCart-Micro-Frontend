const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name:'host',
   remotes: {
    'products': 'http://localhost:4300/remoteEntry.json',
    'cart': 'http://localhost:4400/remoteEntry.json',
    'orders': 'http://localhost:4500/remoteEntry.json',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
 
  ],



  features: {
  
    ignoreUnusedDeps: true
  }
  
});
