(function(controllers) {
    var homeController = require('./homeController');
    var tropoController = require('./tropoController.js');
    var sparkController = require('./sparkController.js');
    
    controllers.init = function (app){
        homeController.init(app);
        tropoController.init(app);
        sparkController.init(app);
    };
})(module.exports);