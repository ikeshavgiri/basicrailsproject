class Users::SessionsController < ApplicationController
    def new
        @user = User.new
    end
    
    def create
        @user = User.new(sign_up_params)
        if @user.save!
        #UserMailer.registration(@user).deliver_now
        #gup = Gupshup::Enterprise.new(:userid => 'ikeshavgiri', :password => '10434bebe47a43e6c3c41c572acc1a7a')
        #gup.send_text_message(:msg => 'I love you', :send_to => '919910333034')     
        flash[:success] = "Signup Successfull."    
        redirect_to new_users_session_path
        else
        flash[:error] = "Please try later."
        redirect_to new_users_session_path    
        end
    end
    
    def destroy
        
    end
    
    def edit
        
    end
    
    def update
        
    end
    
    def find_user
        @user = User.find_by(params[:id])
    end
    
    private
    def sign_up_params
        params.require(:user).permit(:image,:first_name,:last_name,:email,:code,:phone,:password)
    end
end
