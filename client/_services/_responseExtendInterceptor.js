import _ from 'lodash';
import HttpStatus from 'http-status';

function isDataString() {
  return _.isString(this.data);
}

function isDataObject() {
  return _.isObject(this.data);
}

function get(key, defaultValue = undefined) {
  return _.get(this.data, key, defaultValue);
}

function checkHttpStatus(statusCode) {
  return () => this.status === statusCode;
}

function extendCommon(res) {
  res.isDataString = isDataString.bind(res);
  res.isDataObject = isDataObject.bind(res);
  res.get = get.bind(res);
  res.isUnauthorized = checkHttpStatus.bind(res, HttpStatus.UNAUTHORIZED);
  res.isForbidden = checkHttpStatus.bind(res, HttpStatus.FORBIDDEN);
  res.isOk = checkHttpStatus.bind(res, HttpStatus.OK);
  return res;
}

function responseErrorFn($q) {
  return (rejection) => {
    extendCommon(rejection);
    return $q.reject(rejection);
  };
}

/* @ngInject */
export default function responseExtendInterceptor($q) {
  return {
    response: (res) => extendCommon(res),
    responseError: responseErrorFn($q)
  };
}