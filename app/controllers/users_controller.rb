class UsersController < ApplicationController
    skip_before_action :authorize

    def index
        user = User.all
        render json: user
    end

    def show
        user = User.find(session[:user_id])
        render json: user
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # def create
    #     @user = User.new(user_params)
    #      if @user.save
    #         UserMailer.with(user: @user).welcome_email.deliver_later

    #         render json: @user, status: :accepted
    #      else
    #         render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
    #      end
    # end

    private 

    def user_params
        params.permit(:email, :password, :password_confirmation)
    end
end
