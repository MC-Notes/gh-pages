The web site is at https://mc-notes.github.io/

## installation

To use this project locally, you'll need the following things installed on your machine.

1. [Jekyll](http://jekyllrb.com/) - `$ gem install jekyll`
2. [NodeJS](http://nodejs.org) - use the installer.
3. [GulpJS](https://github.com/gulpjs/gulp) - `$ npm install -g gulp` (mac users may need sudo)

Thanks to shakyShane's [starter project](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync/blob/master/README.md).

## Deploy
We are using [gulp](http://gulpjs.com) to deploy the page. The gulpfile is configured to handle local page builds just type 

```
$ gulp deploy
```

into the command line to deploy the website to the master branch.