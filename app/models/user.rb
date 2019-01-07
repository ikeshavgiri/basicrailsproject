class User < ApplicationRecord
    has_secure_password
    mount_uploader :image, ImageUploader
    before_create :generate_access_token,:generate_otp
    
    def generate_access_token
     self.access_token = SecureRandom.hex
    end
    
    def generate_otp
     self.otp = rand(0000..9999)
    end
    
end
