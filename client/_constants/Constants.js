import angular from "angular";

const Constants = angular.module("Constants", []);

Constants.constant("AccessTokenKey", "accessToken");
Constants.constant("OnVerificationErrorStateName", "login");

export default Constants;