#define classes
class Player
    attr_reader :name, :bankroll, :hand, :hand_total

    def initialize(name:, bankroll:, hand:)
        @name = name
        @bankroll = bankroll
        @hand = hand
    end

    def draw_two cardArray
        @hand = cardArray
    end

    def tally_hand
        @hand_total = hand[0].value + hand[1].value
    end

    def money_in
        @bankroll += 10
    end

    def money_out
        @bankroll -= 10
    end
end

class Card 
    attr_reader :number, :suit, :value

    def initialize(number:, suit:, value:)
        @number = number
        @suit = suit
        @value = value
    end

    def self.pushDeck card,deck
        deck.push(
            card
        )
    end
end

########################
########################
#methods

#make a new deck
def makeNewDeck deck
    suits = ["hearts", "diamonds", "clubs", "spades"]

    suits.each{|suit| 

        numbers = [ ['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],['9',9],['10',10],["jack", 10],["queen", 10], ["king", 10], ["ace", 11] ]

        numbers.each{
            |number| 
            makeCard = Card.new(number: number[0], suit: suit, value: number[1])
            Card.pushDeck makeCard,deck
        }

    }
end

#shuffle the deck (n times over)
def shuffle! (n=7)
    n.times {deck.shuffle!}
end

#initialize players
def declare_players playerName
    $player1 = Player.new(name: playerName, bankroll: 100, hand: [])
    #p player1
    
    $the_house = Player.new(name: 'the_house', bankroll: 10000, hand: [])
    # the_house
end

#draw cards
def draw_cards number_of_draws, deck
    results = []
    number_of_draws.times {results << deck.pop}
    results
end

def play_round deck
    #player 1 turn
    cards = draw_cards 2,deck
    $player1.draw_two cards
    $player1.tally_hand
    p "#{$player1.name}'s hand: #{$player1.hand}"
    p "#{$player1.name}'s total: #{$player1.hand_total}"
    puts "\n"
    
    #house's turn
    cards = draw_cards 2,deck
    $the_house.draw_two cards
    $the_house.tally_hand
    p "#{$the_house.name}'s hand: #{$the_house.hand}"
    p "#{$the_house.name}'s total: #{$the_house.hand_total}"
    puts "\n"

end

def calculate_winner
    if $player1.hand_total > $the_house.hand_total
        p "#{$player1.name} wins this hand"
        $player1.money_in
        $the_house.money_out
    elsif $player1.hand_total < $the_house.hand_total
        p "#{$player1.name} loses this hand"
        $player1.money_out
        $the_house.money_in
    else
        p "Its a tie!"
    end
    puts "\n"
    p "#{$player1.name}'s bankroll: #{$player1.bankroll}"
    p "#{$the_house.name}'s bankroll: #{$the_house.bankroll}"

end

def start_game playerName
    p "starting the game"
    declare_players playerName #sets new class intances
    deck1 = []
    makeNewDeck deck1 #makes a new deck
    deck1.shuffle! #shuffle the deck
    play_round deck1 #play a round
    calculate_winner #who won and transfer money
    
end

def another_round playerName
    p "another round"
    deck1 = []
    makeNewDeck deck1 #makes a new deck
    deck1.shuffle! #shuffle the deck
    play_round deck1 #play a round
    calculate_winner #who won and transfer money
    deal_again playerName
end

def deal_again playerName
    p "(d)eal again?"
    deal_again = gets.chomp
    if deal_again == "d"
        another_round playerName
    else
        p "game over"
    end
end

########################
########################

#Getting Started
p "Welcome to Blackjack please enter your name: "
name = gets.chomp

#welcome
p "welcome #{name}"
puts "\n"

#start initializer
p "type 'd' to deal"
gameStart = gets.chomp
if gameStart == "d"
    start_game name
    deal_again name
else
    p "maybe another time then"
end



#print what we've got
#p deck[0]
#p deck
#deck.shuffle!
#deck[0]

