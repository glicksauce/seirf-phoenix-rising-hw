class FixDescriptionColumnTypoAgain < ActiveRecord::Migration[5.2]
  def change
    rename_column :characters, :img_urlr, :img_url
  end
end
