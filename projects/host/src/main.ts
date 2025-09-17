import { initFederation } from '@angular-architects/native-federation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

initFederation({
  'products': 'http://localhost:4300/remoteEntry.json',
  'cart': 'http://localhost:4400/remoteEntry.json',
  'orders': 'http://localhost:4500/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
