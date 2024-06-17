# Donomon Choice RPG
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
Donomon Choice RPG is a choice based game, in which your decisions will decide the outcome of your Donomon's evolution(s)!
On the Adventure page, you are able to select your active Donomon who will be your companion gaining the experience and morality points from your choices.
Each question is provided with four options to chose from, each with a different morality value! So choose carefully!
On the Character page, you are able to view your Donomon's stats, as well as the stats of your other Donomon companions. You can see if you are on the right track to evolve your Donomon into the Donomon you want!
If you don't get the one you want, you can always create a new Donomon and try again!
Everything you do is saved within your session, so you can always come back to it later!
While you are on your adventure, you can always stop for a break and talk to others in the world chat! 
This application is a full stack application, hosted through Heroku, and is accessible through the link below!<br>
[Donomon Choice RPG](https://donomon-rpg-bb9647eceefc.herokuapp.com/)</br>

- Why did you build this project? 
    - We wanted to create a game that would be fun and interactive for the user, while also being able to save their progress and choices. This is to help people unwind and have fun, while also being able to see the results of their choices. Which may give an output to who they are as a person!<br></br>

- What problem does it solve?
    - This application solves the problem of needing entertainment, and not being able to see the results of your choices. This application allows you to see the results of your choices, and how they affect your Donomon's evolution. This application also allows you to save your progress, so you can always come back to it later!
    This could also be used for parents to help teach their children about the consequences of their actions, and how they can affect the outcome of their lives within someone's perception of them.<br></br>

- What did you learn?
    - Throughout this process, we had to expand our knowledge in many of the full stack applications to help us succeed in getting this application completed!
    - Sequelize: We had to learn how to use sequelize to create our database, and how to use it to create our models and associations. Within an application such as this, one of the challenges was learning how to associate relations between the tables, and how to use those associations to get the data we needed. 
    - Handlebars: We had to learn how to use handlebars to create our html pages, and how to use the data from our database to populate the pages with the information we needed. Some of the challenges was rendering proper data from the routes, so that the information we set was directed correctly. 
    - Express: We had to learn how to use express to create our routes, and how to use those routes to render the proper data to the handlebars pages and functions. Some of the challenges associated was ensuring that the proper data was passed through using the CRUD methods, and that the data was being rendered correctly with its associated functions.
    - WebSocket: We had to learn how to use WebSocket to create a live chat. WebSocket allows for live, 2-way connections between a user's browser and a server. This connection has a variety of uses, though we used it to make a live chat usable by anyone who logs into our website. While WebSockets is useful for live connections, it's difficult to coordinate multiple connections to one server all at once. Perfectly doable, though not within the time frame of the project, so for the sake of efficiency, the library socket.io was utilized to streamline the process of making the chat accessible to all players and update every player connected.
    - Socket.io: Socket.io is a library made to be used with WebSocket to streamline the process of making programs that connect with multiple users at once. We used it to speed up development of the live chat. The main challenge with socket.io was learning how to properly utilize it and connect the library to our program, since every resource found online seemed to have a different approach to how to make a live cat with socket.io.
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [User Story](#user-story)
* [Screenshots](#screenshots)
* [License](#license)
* [Credits](#credits)
* [Questions](#questions)


## Installation
To have this application on your own system, `git clone` the repository and set it up in your local system. Ex (Vs Code).
You will need to run `npm install` which will install the necessary package dependencies;
* Once all the dependencies are installed, you will need to run the schema.sql file in mysql to create the database. 
* You will also need to run the seed.sql file in mysql to populate the database with some data as a starting point.

## Usage
FOR TESTING PURPOSES
In order to run the program, after obtaining all of the dependencies you will need to run;
* run schema through mysql to create the database. mysql '-uroot db/schema.sql'
* `npm run seed` : this will populate the database with the data from the seed.sql file.
* `npm start` : this will begin the program in your terminal, in which you can use localhost:3001 to access the web application. mysql workbench can be used to view the database.

FOR USER PURPOSES
* Application link to deployed application: [Donomon Choice RPG](https://donomon-rpg-bb9647eceefc.herokuapp.com/)

FOR DEVELOPER PURPOSES
* Application link to github repository: [Donomon Choice RPG GitHub](https://github.com/Blossomswilts/Donomon-Choice-RPG)

## Contribution
If you would like to contribute to this project, and improve it in your own way(s), please do the following:
- `Fork` the repository on GitHub
- `Clone` the project onto your own machine (such as VsCode)
- `Commit` your changes to a branch you have created
- `Push` your changes back up through your fork
- Submit a `pull request` so that my team and I can review your changes.

As a side note, when making changes, always merge or pull from the latest version to ensure you are working on the most up to date version of the application. 

## User Story
AS a player<br>
I WANT to play a game of asking questions to evolve monsters<br>
SO THAT I can collect fun monsters for personal leisure<br></br>
AS a player<br>
I WANT to access a world chat feature<br>
SO THAT I can communicate with others playing the game<br></br>
AS a player<br>
I WANT to see all of my collected Donomons<br>
SO THAT I can decide on what mon to work on next<br>



## Screenshots

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Credits
* [Michael Tranquillo](https://github.com/Blossomswilts)
* [Amy Green](https://github.com/CaffeinatedJitterBug)

## Questions
If you have any questions, or would like to show off some of your work, don't hesitate to message me through any of the following contacts!

GitHub: [Blossomswilts](https://github.com/Blossomswilts)
Github: [CaffeinatedJitterBug](https://github.com/CaffeinatedJitterBug)
(ctrl+click to follow link, where you can see this user's repositories and profile)
    

Email: michael.r.tranquillo@gmail.com
Email: itwallaby@gmail.com
(ctrl+click to send email to this address with your default email client or copy and paste address into your email client)
