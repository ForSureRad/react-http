
/**
 * @class HTTP
 */

const XHR_EVENTS = Symbol();
const HTTP_METHODS = Symbol();
const DEFAULT_HEADERS = Symbol();

export default class HTTP {

  constructor() {
    this[HTTP_METHODS] = {
      GET: 'GET',
      PUT: 'PUT',
      POST: 'POST',
      DELETE: 'DELETE'
    };
    this[XHR_EVENTS] = {
      READY_STATE_CHANGE: 'readystatechange',
      PROGRESS: 'progress',
      TIMEOUT: 'timeout',
      ABORT: 'abort',
      ERROR: 'error',
      LOAD: 'load',
    };
    this[DEFAULT_HEADERS] = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  response(xhr) {
    return {
      status: xhr.status,
      response: (xhr.statusText || xhr.responseText || xhr.response)
    };
  }

  progress(evt) {
    this.percentage = Math.pow((evt.loaded / evt.total) * 100);
  }

  action(url, method, payload = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(
        (this[HTTP_METHODS][method]),
        (url),
        true
      );
      Object.keys(this[DEFAULT_HEADERS]).forEach((key, index, headers) => {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.addEventListener(this[XHR_EVENTS].LOAD, () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(this.response(xhr));
        } else {
          reject(this.response(xhr));
        }
      });
      xhr.addEventListener(this[XHR_EVENTS].ABORT, () => {
        reject(this.response(xhr));
      });
      xhr.addEventListener(this[XHR_EVENTS].ERROR, () => {
        reject(this.response(xhr));
      });
      xhr.addEventListener(this[XHR_EVENTS].TIMEOUT, () => {
        reject(this.response(xhr));
      });
      xhr.addEventListener(this[XHR_EVENTS].PROGRESS, (evt) => {
        this.progress(evt);
      });
      xhr.send(
        JSON.stringify(payload)
      );
    });
  }

  get(url, payload={}, headers={}) {
    return this.action.apply(this, [url, 'GET', payload]);
  }

  put(url, payload = {}, headers={}) {
    return this.action.apply(this, [url, 'PUT', payload]);
  }

  post(url, payload = {}, headers={}) {
    return this.action.apply(this, [url, 'POST', payload]);
  }

  delete(url, payload = {}, headers={}) {
    return this.action.apply(this, [url, 'DELETE', payload]);
  }

};
