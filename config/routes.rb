Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  get 'main/index'
  root to: 'main#index'
  resources :songs
end
