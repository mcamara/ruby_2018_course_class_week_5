Rails.application.routes.draw do
  resources :teams, only: [:index, :create, :delete]
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'teams#index'
end
