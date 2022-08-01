class UserMailer < ApplicationMailer
    default from: "app.reminder.me86@gmail.com"

    def welcome_email
        @user = params[:user]
        mail(to: @user.email, subject: "Thank you for signing up for Remind Me!")
    end
    
    def reminder_email
        @user = params[:user]
        @title = params[:title]
        @address = params[:address]
        @date = params[:date]  
        @time = params[:time]

        mail( to: @user.email, subject: "#{reminder.title} is taking place at #{reminder.address} on #{reminder.date} at #{reminder.time}")
    end

end
