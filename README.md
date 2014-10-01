[![MEAN.JS Logo](http://meanjs.org/img/logo-small.png)](http://meanjs.org/)

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js
* MongoDB
* Bower
* Grunt
* Sass (Ruby / Gem / Compass)

## Install 

Once you have all the prerequisites:

```
git clone git@github.com:adlenafane/site-salle.git
cd site-salle
npm install
grunt
```

## Deploy

[Heroku toolbelt](https://toolbelt.heroku.com/) and config is required

```
grunt build
git add -p
git commit -m "Build"
git push heroku master 
```
