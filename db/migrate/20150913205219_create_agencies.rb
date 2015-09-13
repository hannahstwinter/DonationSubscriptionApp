class CreateAgencies < ActiveRecord::Migration
  def change
    create_table :agencies do |t|
      t.string :name
      t.text :username
      t.text :password
      t.text :agency_data

      t.timestamps null: false
    end
  end
end
