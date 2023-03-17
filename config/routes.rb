Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :salons, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :users, only: [:create]
      resources :auth, only: [:create] do
        collection do
          post 'password/forgot', to: 'auth#forgot_password'
          post 'password/reset', to: 'auth#reset_password'
          post 'registrations', to: 'registrations#create'
          get 'me', to: 'auth#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end

    end
  end

  get '*path', to: 'pages#index', via: :all

end
