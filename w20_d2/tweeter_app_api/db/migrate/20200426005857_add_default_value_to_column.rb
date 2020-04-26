class AddDefaultValueToColumn < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tweets, :content, 'an insightful tweet'
  end
end
