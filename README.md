# Angular 2 and Django REST Framework

A simple example application where an Angular 2 app talks to an API running
Django REST framework.

## Setup

Install dependencies and run migrations to set up the app:

- Create a virtualenv
- Run `./build-app.sh`

_Note: if you are unsure of how to build a virtualenv, uncomment the lines
in the install script that will do it for you._

## Run the app

Run the REST server:

```
# in the exampleapp folder
python manage.py runserver
```

Start the Angular 2 app:

```
# in the angular2 folder
npm start
```
