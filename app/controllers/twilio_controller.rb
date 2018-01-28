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

    params[:body]
    response = Twilio::TwiML::MessagingResponse.new
    response.message do |message|
     message.body("Location Recieved. Look out for location info at 11:30 AM.")
    end

    render :xml => response.to_xml
  end

  def send_lunch_time
    # put your own credentials here
    account_sid = 'ACe39f617d99a09d34cb057bdb301be050'
    auth_token = 'e38b379ec6cfbd4b7f5d57b0636ee9d3'

    lunch_location = 'This Location'

    # set up a client to talk to the Twilio REST API
    @client = Twilio::REST::Client.new(account_sid, auth_token)

    message = @client.messages.create(
      body: "Lunch is served at #{lunch_location}",
      to: '+16072216266', #Will eventually be a database of numbers from backend.
      from: "16073043504"
    )
    # debugger
    render json: {status: "Messages sent"}
  end


  private

  def get_geocode
  end

  def send_message
  end

  def add_user_to_database
  end
end
