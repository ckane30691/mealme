require 'open-uri'

class TwilioController < ApplicationController
  skip_before_action :verify_authenticity_token

  def voice
    response = Twilio::TwiML::VoiceResponse.new do |r|
      r.say("Yay! You're on Rails!", voice: "alice")
      # r.play("http://linode.rabasa.com/cantina.mp3")
    end
    render :xml => response.to_xml
  end

  def message
    add_user_to_database(params)

    response = Twilio::TwiML::MessagingResponse.new
    response.message do |message|
     message.body("Location Recieved. Look out for location info at 11:30 AM.")
    end

    render :xml => response.to_xml
  end

  def send_lunch_time
    # put your own credentials here
    # debuggers
    lunch_location = request.body.readpartial #get it from the request.
    account_sid = 'ACe39f617d99a09d34cb057bdb301be050'
    auth_token = 'e38b379ec6cfbd4b7f5d57b0636ee9d3'
    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new(account_sid, auth_token)

    Eater.all.each do |eater|
      message = @client.messages.create(
        body: "Lunch is served at #{lunch_location}. Be there at noon!",
        to: eater.phone_number[1..-1], #Will eventually be a database of numbers from backend.
        from: "16073043504"
      )
    end

    render json: {status: "Messages sent"}
  end

  private

  def add_user_to_database(params)
    location_data = get_geocode(params[:Body])
    new_eater = Eater.find_by(phone_number: params[:From])

    if new_eater
      new_eater.update_attributes(loc_x: location_data[:loc_x],
                                  loc_y: location_data[:loc_y])
    else
      new_eater = Eater.create(phone_number: params[:From],
                               loc_x: location_data[:loc_x],
                               loc_y: location_data[:loc_y])
    end
  end

  def get_geocode(text)
    query = parse_body(text)

    response = open("https://maps.googleapis.com/maps/api/geocode/json?address=#{query}&key=#{ENV['maps_api_keys']}").read
    loc_x = JSON.parse(response)['results'][0]["geometry"]["location"]["lat"]
    loc_y = JSON.parse(response)['results'][0]["geometry"]["location"]["lng"]

    {loc_x: loc_x, loc_y: loc_y}
  end

  def send_message
  end

  def parse_body(body)
    body.gsub(" ", "+")
  end
end
