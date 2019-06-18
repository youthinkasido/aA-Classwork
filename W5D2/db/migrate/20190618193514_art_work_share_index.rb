class ArtWorkShareIndex < ActiveRecord::Migration[5.2]
  def change
    add_index(:artwork_shares, [:viewer_id, :artwork_id], :unique => true)
    
    add_index(:artwork_shares, :artwork_id)
  end
end
