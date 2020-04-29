class CreateCharacter < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :desciption
      t.string :img_urlr
    end
  end
end
