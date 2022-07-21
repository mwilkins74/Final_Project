class RemindersController < ApplicationController
    skip_before_action :authorize
    
    def index
        reminder = Reminder.all 
        render json: reminder
    end

    def show
        render json: find_reminder
    end

    def create
        reminder = Reminder.create!(reminder_params)
        session[[:user_id]] = user.id
        render json: reminder, status: :created
    end

    def update
        reminder = Reminder.find(params[:id])
        reminder.update!(reminder_params)
        render json: reminder, status: :updated
    end

    def destroy
        reminder = Reminder.find_by(params[:reminder_id])
        reminder.destroy
        render json: reminder
    end

    private

    def find_reminder
        Reminder.find(params[:id])
    end

    def reminder_params
        params.permit(:title, :address)
    end
end
