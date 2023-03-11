module Api
    module V1
        class UsersController <ApplicationController
            def create
                user = User.new(
                    email: params[:user][:email],
                    password: params[:user][:password],
                    password_confirmation: params[:user][:password]
                )

                if user.save
                    session[Luser_id] = user.id
                    rendert json: { status: :success, logged_in: true }, status: 204
                else
                    render json: { status: :error, logged_in: false }, status: 422
                end
            end
        end
    end
end
