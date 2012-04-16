/*
 * A master detail view, utilizing a native table view component and platform-specific UI and navigation. 
 * A starting point for a navigation-based application with hierarchical data, or a stack of windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else if (Ti.Platform.osname === 'mobileweb') {
	alert('Mobile web is not yet supported by this template');
}
else {
	
	//require and open top level UI component
	var Window = require('ui/ApplicationWindow');
		
	new Window().open();
}
