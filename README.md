# URIOJOOJ

This is an user-made redesign for the [URI Online Judge](https://urionlinejudge.com.br) website, 
built for fun.

It's built using Node both in the front-end (React, inside `client/` folder) and in the back-end 
(Express, inside the `server/` folder). Also, it uses Postgres as database and Sequelize as ORM.

## Running the project
To run the project, you'll need Node installed and Yarn is recommended as well. 

Executing `yarn` (or `npm i`) and then `yarn start` (or `npm run start`) on the client folder will 
install the front-end dependencies and start serving the React frontend with HMR, respectively.

Pretty much the same goes to the server, but there's also a bit of a setup.
To be able to start the server, you'll need to create a `.env.dev` file on the server folder and 
fill it with the data shown in the `.env.example` file. By default, the database dialect is defined 
to be Postgres but host, name, user and password can be provided through `.env.dev`, just like the 
server port, which is optional and defaults to 8000. A `.env.prod` file can also be created to
define the same arguments but now for a production environment.

With at least one of these files good to go (preferably the development one), running `yarn`
(or `npm i`) will also install its dependencies and a `yarn start:[environment]` (or 
`npm run start:[environment]`) will be enough to get it up. (`environment` being either `dev` or 
`prod`.)

## Updating database stuff

This project uses Sequelize CLI to manage database migrations and models. As it follows a pattern,
it is recommended to use it as well if any new tables or modifications on tables are needed.

It can be used as `sequelize [command]` inside the server folder. 
[Here](https://github.com/sequelize/cli)'s the tool's Github repo if further instructions are needed
on that.