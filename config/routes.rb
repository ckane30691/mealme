Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post 'twilio/voice', to: 'twilio#voice'
  post 'twilio/message', to: 'twilio#message'
  get 'twilio/send_lunch_time', to: 'twilio#send_lunch_time'

  root 'static_pages#root'

end
