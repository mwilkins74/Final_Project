Rails.application.routes.draw do
  resources :users
  resources :contacts
  resources :reminders
  resources :user_contacts
  resources :reminder_contacts

  get "/me", to: "users#show"
  get "/reminders", to: "reminders#index"

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  

  delete "/logout", to: "sessions#destroy"
  delete '/my-reminders/:id', to: "reminders#destroy"
  

  
  # get '/hello', to: 'application#hello_world'

   get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
