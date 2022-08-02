Rails.application.routes.draw do
  resources :user_reminders
  # resources :users
  resources :contacts
  resources :reminders
  resources :user_contacts
  resources :reminder_contacts

  get "/me", to: "users#show"
  # get "/reminders", to: "reminders#show"
  get "/desc-reminders", to: "reminders#desc_reminders"
  get "/asc-reminders", to: "reminders#asc_reminders"
  get "/reminder_dates", to: "reminders#reminder_dates"

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"
  delete '/my-reminders/:id', to: "reminders#destroy"
  

  

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end