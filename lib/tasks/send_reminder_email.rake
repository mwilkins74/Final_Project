namespace :send_reminder_email do
    desc "Sends an email to the user whenever a new Reminder is created"
    User.all.each do |user|
        puts "start emails"

        if reminders.create
            UserMailer.with(title: reminder[:title], address: reminder[:address], date: reminders[:date], time: reminder[:time]).reminder_email.deliver
        end
    end
end