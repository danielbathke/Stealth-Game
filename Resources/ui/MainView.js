function MainView() {
	self = Ti.UI.createView({});

	createButtons();
	
	return self;
};

function createButtons() {
	createStartGameButton();
	createTutorialButton();
};

function createStartGameButton() {
	var buttonStartGame = Ti.UI.createButton({
		title:'Start Game',
		width:200,
		height:40,
		bottom:200		
	});
	self.add(buttonStartGame);
	
	buttonStartGame.addEventListener('click', function(e) {
		
		var StartGameView = require('ui/StartGameView');
		
		var startGameWindow = Ti.UI.createWindow({
			title:'Start Game',
		    navBarHidden:false
		});

		var startGameView = new StartGameView();
		//	startGameWindow.add(startGameView);
		//startGameWindow.open();
		
		Titanium.UI.UserWindow.getParent().add(startGameView);
	});
}

function createTutorialButton() {
	var buttonTutorial= Ti.UI.createButton({
		title:'Tutorial',
		width:200,
		height:40,
		bottom:150		
	});
	self.add(buttonTutorial);
	
	buttonTutorial.addEventListener('click', function(e) {
		var TutorialView = require('ui/TutorialView');
		
		var tutorialWindow = Ti.UI.createWindow({
			title:'Start Game',
		    navBarHidden:false
		});

		var tutorialView = new TutorialView();
		tutorialWindow.add(tutorialView);
		tutorialWindow.open();
	});	
}

module.exports = MainView;