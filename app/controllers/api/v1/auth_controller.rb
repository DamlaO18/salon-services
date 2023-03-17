module Api
    module V1
      class AuthController < ApiController
        before_action :authenticate, only: %i[logout]
  
        def create
          user = User.find_by(email: params[:user][:email])
  
          if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
            render json: { status: :success, user: user, logged_in: true }, status: 200
          else
            render json: { status: :error, logged_in: false }, status: 400
          end
        end
  
        def logout
          reset_session
  
          render json: { logged_in: false }, status: 200
        end

        def current_user
          return nil unless session[:user_id]
      
          @current_user ||= User.find(session[:user_id])
        end
  
        def logged_in
          if current_user
            render json: { email: current_user&.email, logged_in: true }, status: 200
          else
            render json: { logged_in: false }, status: 200
          end
        end
      end
    end
  end