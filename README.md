The web site is at https://mc-notes.github.io/

# For Developers

If yo are here to see how this website is built, here is how:

## Installation

To use this project locally, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

Thanks to shakyShane's [starter project](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync/blob/master/README.md).

## Run Website Locally

the gulp file is setup to run a local server and startup your favorite browser wit hthe built site. All changes in the `_sass`, `_layout` and `_includes` folders will be automatically reflected in the browser. To run the local server just type 

```
$ gulp
```

into the command line.

## Deploy to github

We are using [gulp](http://gulpjs.com) to deploy the page. The gulpfile is configured to handle local page builds just type 

```
$ gulp deploy
```

into the command line to deploy the website to the master branch.