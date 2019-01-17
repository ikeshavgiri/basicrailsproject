Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :users do
   resources :sessions
  end
  root 'users/sessions#new'
end
