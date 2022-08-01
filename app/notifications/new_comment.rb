NewComment.with(post: @post).deliver_later(current_user)

class NewComment < Noticed::Base
    deliver_by :database, format: :to_database
    deliver_by :email, mailer: "UserMailer"
    
    def to_database
        {
            type: self.class.name,
            params: params
        }
    end

    params :post

    def message 
        t(".message")
    end

    def url
        post_path(params[:post])
    end
     
end