function ApplicationWindow() {
	//declare module dependencies
	var MainView = require('ui/MainView'),
		DetailView = require('ui/DetailView');
		
	//create object instance
	var self = Ti.UI.createWindow({
		title:'Stealth Game',
		exitOnClose:true,
		navBarHidden:false,
		backgroundColor:'#111111'
	});
		
	//construct UI
	var mainView = new MainView();
		//detailView = new DetailView();

	self.add(mainView);
	
	return self;
};

module.exports = ApplicationWindow;
