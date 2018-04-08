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
    apiKey: "AIzaSyCHQ0WOTYQWjZqHqp47yQt9Vc1Qh_bXdaY",
    authDomain: "hustler-s-league.firebaseapp.com",
    databaseURL: "https://hustler-s-league.firebaseio.com",
    projectId: "hustler-s-league",
    storageBucket: "hustler-s-league.appspot.com",
    messagingSenderId: "725127233905"
    // apiKey: 'AIzaSyBvJXL0K2XrhG7J-IaQ9JdXl1PMCzbR_Pg',
    // authDomain: `${FB_PROJECT_ID}.firebaseapp.com`,
    // databaseURL: `https://${FB_PROJECT_ID}.firebaseio.com`,
    // projectId: FB_PROJECT_ID,
    // storageBucket: `${FB_PROJECT_ID}.appspot.com`,
    // messagingSenderId: '1075022643383'
  },
  apiRoot: 'http://localhost:1337/' // e.g., http://localhost:1337/ (include trailing slash)
};
