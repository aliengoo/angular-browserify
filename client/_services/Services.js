import angular from "angular";
import 'angular-local-storage';

import Constants from "../_constants/Constants";

import LogoutService from "./LogoutService";
import StorageService from "./StorageService";
import VerifyAccessService from "./VerifyAccessService";

import AccessTokenInterceptorService from "./AccessTokenInterceptorService";
import ResponseExtendInterceptorService from "./ResponseExtendInterceptorService";

const Services = angular.module('Services', ['Constants', 'LocalStorageModule']);

Services
  .service("storageService", StorageService)
  .service("logoutService", LogoutService)
  .service("accessTokenInterceptorService", AccessTokenInterceptorService)
  .service("responseExtendInterceptorService", ResponseExtendInterceptorService)
  .service("verifyAccessService", VerifyAccessService);

export default Services;
