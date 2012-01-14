THIS FORK IS DIFERENT FROM [ORIGIN](https://github.com/smontgomerie/Appcelerator-on-Rails.git)

# Appcelerator On Rails #
appcelerator-on-rails is an attempt to bring some of the paradigms of Ruby on Rails to the Appcelerator platform.
It includes a Model-View-Controller paradigm and generators to facilitate rapid application development.

## Getting Started ##

Generate a new Appcelerator project using the Titanium SDK. After you need added the appcelerator-on-rails in Resources/lib. See an example:

	# on project root path
	git submodule add https://emersonvinicius@github.com/emersonvinicius/appcelerator-on-rails.git Resources/lib/appcelerator-on-rails

Before you should add the boot project, on app.js

	Ti.include("lib/appcelerator_on_rails/boot.js");

Now you can use appcelerator-on-rails helpers


## Generators ##
Comming soon

## App Organization ##

The idea behind the MVC paradigm is keep logic code separate from view code. Especially when designing universal apps,
this becomes increasingly important to your app's architecture.

When creating a new window, you'll want to set the url parameter to your new window's controller.

    Ti.UI.createWindow({
        url: "controllers/users.js"
    });

This controller then instantiates a corresponding view, in case, the users view.  Place all view-related code in the view, and attach event
handlers to the view's controller.  When the controller responds to events, it can, in turn, affect the view.  Thus we've
achieved MVC separation of concerns.

## Credits ##
Appcelerator-on-Rails the origin project https://github.com/smontgomerie/Appcelerator-on-Rails
TiStore uses the origin project http://github.com/jcfischer/TiStore