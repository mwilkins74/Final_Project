class UserMailer < ApplicationMailer
    default from: "app.reminder.me86@gmail.com"

    def welcome_email
        @user = params[:user]
        mail(to: @user.email, subject: "Thank you for signing up for Remind Me!")
    end

end
