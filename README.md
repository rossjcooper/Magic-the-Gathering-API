# MTG API
This is a work in progress API service for a Magic the Gathering application that will handle searching for cards and 
creating and sharing decks, want lists and trade lists.

Built on [SailsJS](http://sailsjs.org).

## Requirements

* Node and NPM, [available here](https://nodejs.org/en/download/).
* MongoDB server, [available here](https://docs.mongodb.com/manual/installation/).

## Installation

1. `npm install -g sails`
2. Clone the repo.
3. `cd` into the project directory.
4. `npm install`
3. Start your mongodb server, change any configs to match.
5. `sails lift` to start the app server.
6. Visit [http://localhost:1337](http://localhost:1337) to see the app.

## Auto-restart the server on file change

During development manually restarting the server when we make changes can ba annoying so we can use foreverJS to do 
this for us. 

1. `npm install -g forever`
2. `npm run dev`

## Running scrapes

We use **magicthegarthering.io** to pull card and types data into our database. 
For more information on the service [view their documentation here](https://docs.magicthegathering.io/).

#### Cards
To scrape the cards run `npm run scrape:cards`, this will boot up the app, scrape the cards api and insert into the DB 
any card we don't already have. It may take a while especially on the first run so be patient and wait for the script to
 exit properly.
 
 We also log to the console which cards we are currently processing as well as potentially any errors we occur.
 
 ## Special mentions
 
 Big thank you to the guys behind [magicthegathering.io](https://magicthegathering.io/) for providing the data service.


