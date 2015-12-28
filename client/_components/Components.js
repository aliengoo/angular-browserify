import angular from 'angular';
import pageHeader from './PageHeader';
import formGroup from './formGroup';
import controlLabel from './controlLabel';
import errorBlock from './errorBlock';

const Components = angular.module('Components', [])
  .directive('formGroup', formGroup)
  .directive('controlLabel', controlLabel)
  .directive('errorBlock', errorBlock)
  .directive('pageHeader', pageHeader);

export default Components;

