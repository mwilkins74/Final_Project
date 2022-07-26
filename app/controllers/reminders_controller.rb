class RemindersController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Reminder.all
    end

    def show
        render json: find_reminder
    end

    def create
        reminder = Reminder.create!(reminder_params)
        render json: reminder, status: :created
    end

    def update
        reminder = Reminder.find(params[:id])
        reminder.update!(reminder_params)
        render json: reminder, status: :updated
    end

     def user_reminders
        user = User.find(session[:user_id])
        if user
            render json: user.reminders
        else
            render json: {message: "User not found"}, status: :not_found
        end
    end

    def destroy
        reminder = Reminder.find(params[:id])
        reminder.destroy
        render json: reminder
    end

    def desc_reminders
       render json: Reminder.order(date: :desc)
    end

     def asc_reminders
       render json: Reminder.order(:date)
    end

    private

    def find_reminder
        Reminder.find(params[:id])
    end

    def reminder_params
        params.permit(:title, :address, :date, :user_id)
    end
end
