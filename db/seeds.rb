Song.delete_all

20.times do |i|
  Song.create(title: "Song #{i+1}", artist: "This is song #{i+1}", price: (rand(1).to_f + (rand(100)/100.00)) )
end
