class FixDescriptionColumnTypo < ActiveRecord::Migration[5.2]
  def change
    rename_column :characters, :desciption, :description
  end
end
