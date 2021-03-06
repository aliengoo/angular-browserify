import angular from "angular";
import Services from "../_services/Services";

import pageHeader from "./PageHeader";
import formGroup from "./formGroup";
import controlLabel from "./controlLabel";
import errorBlock from "./errorBlock";
import authenticatedNavbar from "./navbar/authenticatedNavbar";
import navbar from "./navbar/navbar";

const Components = angular.module('Components', [Services.name])
  .directive('formGroup', formGroup)
  .directive('controlLabel', controlLabel)
  .directive('errorBlock', errorBlock)
  .directive('authenticatedNavbar', authenticatedNavbar)
  .directive('navbar', navbar)
  .directive('pageHeader', pageHeader);

export default Components;

