# README

MealMe helps food providers locate their customers more easily. The app is designed for customer with low-end technological capabilities ie. cell phone with only text message capabilities.

Contributors:

Cory Kane - Web Developer

Adrian Jewell - Web Developer

Justin Deidrich - Business Concept/Presentation


#How does it work?

1. Customers send their address to a specified phone number.

2. MealMe will record the information in a database, and display the users location to the provider, using the app.

3. When the provider wants to notify people about lunch, they send a mass notification to everybody who is registered. 

# Instructions for Running

MealMe couldn't be easier to get up and running, assuming you have basic knowledge of web development and API Keys.

First get a google maps API KEY, and Twilio Account.

In terminal, simply

1. `git clone` the repository

2. `bundle install`.

3. Now, paste your google API KEYS in the application.yml file, and the Twilio api keys and phone number directly in the `./twilio_contoller.rb` file.

4. run `npm install`.

5. run `rails s` to start the server.

6. `./ngrok http 3000` in yet another new shell - get ngrok [https://ngrok.com/3](here).
