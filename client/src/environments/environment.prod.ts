// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const FB_PROJECT_ID = 'hustler-s-league-dev';

export const environment = {
  production: false,
  auth: {
    clientId: 'wmf8JtTLmD9pooMgM2pOlF63fnDzlB2t',
    clientDomain: 'hrtechsolutions.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:1337/', // e.g., http://localhost:1337/
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  },
  firebase: {
    apiKey: 'AIzaSyBvJXL0K2XrhG7J-IaQ9JdXl1PMCzbR_Pg',
    authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${FB_PROJECT_ID}.firebaseio.com`,
    projectId: FB_PROJECT_ID,
    storageBucket: `${FB_PROJECT_ID}.appspot.com`,
    messagingSenderId: '1075022643383'
  },
  apiRoot: 'http://localhost:1337/' // e.g., http://localhost:1337/ (include trailing slash)
};
