README
MealMe helps food providers locate their customers more easily. The app is designed for customer with low-end technological capabilities ie. cell phone with only text message capabilities.

Contributors:

Justin Deidrich - Business Concept/Presentation

Cory Kane - Web Developer

Adrian Jewell - Web Developer

How does it work?
Customers send their address to a specified phone number.

MealMe will record the information in a database, and display the users location to the provider, using the app.

When the provider wants to notify people about lunch, they send a mass notification to everybody who is registered.

Instructions for Running
MealMe couldn't be easier to get up and running, assuming you have basic knowledge of web development and API Keys.

First get a google maps API KEY, and Twilio Account.

In terminal, simply

git clone the repository

bundle install.

Now, paste your google API KEYS in the application.yml file. See the twilio_controller.rb for how to name them.

run npm install.

run rails s to start the server.

./ngrok http 3000 in yet another new shell - get ngrok https://ngrok.com/3.

Contact the contributors for a live demo!

Features
Twilio mediates sending and receiving of sms text messages.

Google Maps UI displays customer location. Provider can notify all customers with a click of a button.

PostgreSQL database stores customer information. Users get added to the database when they text their location.

Google Maps Geocoding API converts their address into coordinates.
