class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :code
      t.string :phone
      t.string :image, default: ''
      t.string :otp
      t.boolean :otp_verified, default: false
      t.string :access_token
      t.string :password_digest
      t.timestamps
    end
  end
end
