# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Mountain.destroy_all


Mountain.create :name => 'Mount Everest', :place => 'Nepal', :height => 8848
Mountain.create :name => 'K2', :place => 'Pakistan', :height => 8611
Mountain.create :name => 'Kangchenjunga', :place => 'Nepal', :height => 8586
Mountain.create :name => 'Lhotse', :place => 'Nepal ', :height => 8516
