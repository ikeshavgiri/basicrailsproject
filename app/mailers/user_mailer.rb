class UserMailer < ApplicationMailer
    default from: 'no-reply@ikeshavgiri.com'
    def registration(user)
        @user = user
        mail(to: @user.email,subject: 'Welcome to My Awesome WebSite')
    end
end
