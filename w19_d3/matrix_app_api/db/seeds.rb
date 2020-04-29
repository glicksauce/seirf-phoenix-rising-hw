# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Character.create([
	{ name: "Neo", description: "The One who will bring balance to the Matrix" },
	{ name: "Trinity", description: "He who will find the One" },
	{ name: "Morpheus", description: "She who will fall in love with the One" },
	{ name: "Agent Smith", description: "Built to eliminate anomaly's in the Matrix" },
])