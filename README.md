# README

MealMe helps food providers locate their customers more easily. The app is designed for customer with low-end technological capabilities ie. cell phone with only text message capabilities.

Contributors:

Justin Deidrich - Business Concept/Presentation

Cory Kane - Web Developer

Adrian Jewell - Web Developer

# How does it work?

1. Customers send their address to the Twilio webhook phone number.

2. MealMe will record the information in a database, and display the users location to the provider, using the app below. The app will also send a confirmation message to the sender.

3. When the provider wants to notify people about lunch, they send a mass notification to everybody who is registered, again using the Twilio webhook.

![alt text](https://github.com/ckane30691/mealme/blob/master/docs/shot.png)

# Instructions for Running

MealMe couldn't be easier to get up and running, assuming you have basic knowledge of web development and API Keys.

First get a google maps API KEY, and Twilio Account.

In terminal, simply

1. `git clone` the repository

2. `bundle install`.

3. Now, paste your google API KEYS in the `application.yml` file.  See the `twilio_controller.rb` for how to name them.

4. run `npm install`.

5. run `rails s` to start the server.

6. `./ngrok http 3000` in yet another new shell - get ngrok [https://ngrok.com/3](here).

Contact the contributors for a live demo!

# Features

1. Twilio mediates sending and receiving of sms text messages.

2. Google Maps UI displays customer location. Provider can notify all customers with a click of a button.

3. PostgreSQL database stores customer information. Users get added to the database when they text their location.

4. Google Maps Geocoding API converts their address into coordinates.
