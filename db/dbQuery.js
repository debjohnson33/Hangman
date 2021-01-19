import client from './pool';

export default {
  query(queryText, params) {
    return new Promise((resolve, reject) => {
      client.query(queryText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => [
          reject(err);
        ]);
    });
  }
};