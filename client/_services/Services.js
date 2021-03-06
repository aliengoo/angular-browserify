import angular from "angular";
import "angular-animate";
import 'angular-local-storage';

import Constants from "../_constants/Constants";

import LogoutService from "./LogoutService";
import StorageService from "./StorageService";
import UserNotifierService, {userNotifierServiceConfig} from "./UserNotifierService";

import VerifyAccessService from "./VerifyAccessService";

import AccessTokenInterceptorService from "./AccessTokenInterceptorService";
import ResponseExtendInterceptorService from "./ResponseExtendInterceptorService";

const Services = angular.module("Services", [

  // vendor moduels
  "LocalStorageModule",
  "ngAnimate",
  "toastr",

  // app modules
  Constants.name
]);

Services
  .service("storageService", StorageService)
  .service("userNotifierService", UserNotifierService)
  .config(userNotifierServiceConfig)
  .service("logoutService", LogoutService)
  .service("accessTokenInterceptorService", AccessTokenInterceptorService)
  .service("responseExtendInterceptorService", ResponseExtendInterceptorService)
  .service("verifyAccessService", VerifyAccessService);


export default Services;
