const firstControllerHandler = require( './firstControllerHandler' );
require( './styles.scss' );

angular.module( 'myControllers', [] )
	.controller( 'FirstCtrl', firstControllerHandler );

module.exports = 'myControllers';
