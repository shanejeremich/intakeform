# New Participant Intake form

You can find the deployed project at [Intake Form](https://shanejeremich.github.io/intakeform/)

## Overview

**This Project was my submission for Just Utah Coders Internship.**

**Requirements:**
Using HTML, CSS, and Javascript, create a web form for a Contact Us page. Use whichever framework you’re most comfortable with (React, Vue, jQuery, vanilla Javascript, etc).

**Submit** the project as either a link to a _public Github repository_ **or** a _zip file attached to the email_.

The form must accept the following information and implement the following validations:

> The user’s name- Cannot be blank

> Email - Cannot be blank AND must be a valid email address

> Birth date - Can be blank - If not empty, the input must be a valid date

> Agreement to be contacted - Must be checked

The form has a “submit” button that is disabled if any of the previous fields are invalid
The form has a “clear” button that clears the rest of the form
To submit the form, make an HTTP POST request to https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users with JSON as the HTTP request body. The JSON should look like the sample user shown here. You should receive an HTTP 200 in response to your request.

After the form is submitted, display a success message and clear the rest of the form
You may use any preexisting CSS framework or no framework

![Intake Form](/public/images/finaldraft.jpg)

<br>

## Contributors

|                                        [Shane Jeremich](https://github.com/shanejeremich)                                        |
| :----------------------------------------------------------------------------------------------------------------------------: |
|                     [<img src="https://avatars.githubusercontent.com/u/51142646?v=4" width = "200" />](https://github.com/shanejeremich)                      |
|                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/shanejeremich)                    |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/shanejeremich/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v17.0.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Key Features

- Form makes a HTTP POST request to https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users
- Forms abide by the rules set by the requirements for this project
- Receives a HTTP 200 in response to your request

### Front end deployed to `GitHub Pages`

> [Intake Form](https://shanejeremich.github.io/intakeform/)

# APIs

- https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users

# Installation Instructions

- Fork and clone the repo to install it as your own remote.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory
    * eject - copy the configuration files and dependencies into the project so you have full control over them
    * deploy - publishes build folder to gh-pages branch
