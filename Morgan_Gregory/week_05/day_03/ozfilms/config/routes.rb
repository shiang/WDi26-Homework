Rails.application.routes.draw do
  root :to => 'movies#index'
  resources :directors
  resources :movies
end
