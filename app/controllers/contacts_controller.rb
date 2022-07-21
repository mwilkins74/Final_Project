class ContactsController < ApplicationController
    skip_before_action :authorize


    def index
        contact = Contact.all
        render json: contact
    end

    def show
        contact = find_contact
        render json: contact
    end

    private

    def find_contact
        Contact.find(params[:id])
    end

    def contact_params
        params.permit(:name, :email, :username, :user_id, :reminder_id)
    end
end
