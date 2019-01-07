class Users::SessionsController < ApplicationController
    def new
        @user = User.new
    end
    
    def create
        @user = User.new(sign_up_params)
        if @user.save!
        UserMailer.registration(@user).deliver_now     
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
