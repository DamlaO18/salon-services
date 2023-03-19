module Api
    module V1
        class UsersController <ApplicationController

            def create
                user = User.create(
                user_params    
                # {

    
                #     email: params[:user][:email],
                #     password: params[:user][:password]
                #     # password_confirmation: params[:user][:password]
                #     }
                )

                if user.valid?
                    session[user_id] = user.id
                    render json: { status: :success, logged_in: true }, status: 200
                else
                    render json: { status: :error, logged_in: false }, status: 422
                end
            end


            private 

            def user_params
                params.permit(:email, :password, :password_confirmation, :user_id)
            end
        end
    end
end
