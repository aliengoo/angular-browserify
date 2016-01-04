import angular from "angular";
import 'angular-local-storage';

import Constants from "../_constants/Constants";

import logoutService from "./logoutService";
import StorageService from "./StorageService";
import verifyAccessService from "./verifyAccessService";

import accessTokenInterceptor from "./_interceptors/accessTokenInterceptor";
import responseExtendInterceptor from "./_interceptors/responseExtendInterceptor";

const Services = angular.module('Services', ['Constants', 'LocalStorageModule']);

Services
  .service("storageService", StorageService)
  .service("logoutService", logoutService)
  .service("accessTokenInterceptor", accessTokenInterceptor)
  .service("responseExtendInterceptor", responseExtendInterceptor)
  .service("verifyAccessService", verifyAccessService);

export default Services;
