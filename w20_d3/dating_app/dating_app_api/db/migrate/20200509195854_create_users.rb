class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :starsign
      t.integer :age
      t.string :img
      t.boolean :ltl

      t.timestamps
    end
  end
end
