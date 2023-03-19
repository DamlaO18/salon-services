module Api 
    module V1 
        class ReviewsController < ApplicationController
            protect_from_forgery with: :null_session

            def create
                review = salon.reviews.build(review_params)
                review.salon_id = params[:salon_id]

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            def destroy
                review = Review.find_by(id:params[:id])

                if review.destroy
                    head :no_content
                else
                    render json: { error: review.errors.messages }, status: 422
                end
            end

            private 

            def salon 
                @salon = Salon.find_by(id:params[:salon_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :salon_id, :user_id)
            end
        end
    end
end