var moment = require('moment');
var es = require('../../node_modules/moment/locale/es.js');

class firstControllerHandler {
  constructor() {
    this.result = 6+22;
		console.log ( `El evento ocurrió ${this.spentTime()}` )
  }
  spentTime() {
  	moment.locale('es');
		return moment(1316116057189).fromNow();
	}
}

module.exports = firstControllerHandler;