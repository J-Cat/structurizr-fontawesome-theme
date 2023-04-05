# Structurizr FontAwesome Theme

This package includes a Structurizr theme for all the FontAwesome Free icons, based upon the FontAwesome Icons Set (https://github.com/FortAwesome/Font-Awesome).


## Usage

In order to use this package, simply reference it as follows in your Structurizr workspace.dsl:

> theme[s] https://raw.githubusercontent.com/J-Cat/structurizr-fontawesome-theme/master/theme[-embedded].json

Eg:

> theme https://raw.githubusercontent.com/J-Cat/structurizr-fontawesome-theme/master/theme.json


## Updating theme.json/theme-embedded.json

As well as the theme itself, this also includes a script that can be run from the root, that runs through the fontawesome folders and generates the icon elements in the theme.json as well as the theme-embedded.json.

To use, simply run the following:

> node extract-icons-to-theme.js

Or:

> pnpm extract-icons
