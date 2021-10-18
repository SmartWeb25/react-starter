import superagent from 'superagent';
const ROOT_URL = 'http://localhost:8080/api/';
const methods = ['get', 'post', 'put', 'patch', 'del'];

class _ApiClient {
  constructor(token) {
    methods.forEach((method) =>
      this[method] = (path, { params, data, port, contentType } = {}) => new Promise((resolve, reject) => {
        
        const request = superagent[method](ROOT_URL + path);
        if (contentType) {
          request.set('Content-Type', contentType)
        }
        if (params) {
          request.query(params);
        }
        if (port) {
          request.set('port', port)
        }
        
        if (token) {
          request.set('Authorization', 'Bearer ' + token);
        }
        
        request.withCredentials = true;
        
        if (data) {
          request.send(data);
        }

        request.end((err, res) => {
          if (!err) {
            resolve(JSON.parse(res.text));
          } else {
            if (res && res.text) {
              try {
                reject(JSON.parse(res.text));
              } catch (e) {
                reject('error');
              }
            } else {
              reject('error in api call');
            }
          }
        });
      })
    );
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
