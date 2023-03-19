module Api
    module V1
      class AuthController < ApiController
        # before_action :user, only: %i[logout]
  
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
          session[:user_id] = nil

          # reset_session 

          # session.delete(:user_id)
  
          render json: { logged_in: false }, status: 200
        end

        # def current_user
        #   return nil unless session[:user_id]
      
        #   current_user ||= User.find_by(id: session[:user_id])
        
        # end
  
        def logged_in
          user = User.find_by(id: session[:user_id])

          if user
            # session[:user_id] = current_user.id
            render json: { email: user&.email, logged_in: true, user_id: session[:user_id] }, status: 200
          else
            render json: { logged_in: false }, status: :unauthorized
          end
        end
      end
    end
  end