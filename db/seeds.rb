
Reminder.destroy_all
User.destroy_all
Contact.destroy_all
ReminderContact.destroy_all
UserContact.destroy_all

puts "Seeding Data..."

puts "User Seeds"

User.create!(email: "markymark@gmail.com", password: "123")
User.create!(email: "m@gmail.com", password: "321")

puts "Reminder Seeds"

Reminder.create!(title: "Doctor Appointment", address: "24 Park Ave. New York, NY 10017", date: "2022-07-22", time: "03:00 PM", incomplete: "true", user_id: 1)
Reminder.create!(title: "Haircut", address: "100 York Ave. New York, NY 10065", date: "2022-07-19", time: "06:30 PM" , incomplete: "true", user_id: 1)
Reminder.create!(title: "Car Inspection", address: "210 Long Island Ave. Long Island City, NY 11101", date: "2022-07-20", time: "12:00 PM", incomplete: "true", user_id: 1)
Reminder.create!(title: "Family Dinner", address: "1690 Lexington Ave. New York, NY 10029", date: "2022-07-02", time: "07:00 PM" , incomplete: "true",  user_id: 2)
Reminder.create!(title: "Gym", address: "1429 2nd Ave. New York, NY 10020", date: "2022-07-20",time: "11:00 AM", incomplete: "true", user_id: 2)
Reminder.create!(title: "Run", address: "28 3rd Ave. New York, NY 10013", date: "2022-07-25", time: "06:00 PM", incomplete: "true", user_id: 2)

puts "Contact Seeds"

Contact.create!(email: "kennethiscool@gmail.com", user_id: 1, reminder_id: 1)
Contact.create!(email: "james4president@gmail.com", user_id: 1, reminder_id: 5)
Contact.create!(email: "myneighborcorey@gmail.com", user_id: 1, reminder_id: 5)
Contact.create!(email: "ozvaldotheTao@gmail.com", user_id: 1, reminder_id: 4)
Contact.create!(email: "tours_by_will@gmail.com", user_id: 2, reminder_id: 2)
Contact.create!(email: "yaxthemax@gmail.com", user_id: 2, reminder_id: 3)

# ReminderContact.create!(reminder_id: 1, user: 3)

UserContact.create!(user_id: 1, contact_id: 2)

UserReminder.create!(user_id: 1, reminder_id: 2)


puts "Done Seeding!"