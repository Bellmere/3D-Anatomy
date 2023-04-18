import { TOKEN } from '../config/config';
export default class AuthHuman {
  routeAuth = TOKEN;
  constructor() {}

  get headers() {
    return {
      'Content-Type': 'application/json;charset=UTF-8',
      "Authorization": "Basic " + this.keyAuth,
    };
  }

  get keyAuth() {
    return btoa(`${process.env.REACT_APP_BIO_PUBLIC_KEY}:${process.env.REACT_APP_BIO_SECRET_KEY}`)
  }

  async auth () {

    var post_data_string = JSON.stringify({
      "grant_type": 'client_credentials',
      "scope": 'contentapi',
    });

    let data = await fetch(this.routeAuth, {
      method: 'POST',
      headers: this.headers,
      body: post_data_string,
    })
    console.log(data);
    data = await data.json();
    console.log(data);
  }
}
