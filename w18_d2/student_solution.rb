# https://git.generalassemb.ly/ira/SEIR-FLEX-123/tree/master/unit_4/w18d2/homework

###################################
p "###################################"

#Hello World
#Print "Hello World" to the console

p "Hello World"

#After you have printed Hello World:

adjective = "Big Bad"
#Interpolate the adjective variable into the Hello World string using #{}
#Expected output:
#=> Hello Big Bad World

p "Hello #{adjective} World"

#Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to all uppercased letters.

hello = "Hello World"
hello.upcase!
p hello
puts "\n"
###################################
p "###################################"
p "Nums Array and Enumerables"
#With the following array:

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1 - Use .uniq to print the array with all duplicate entries removed
p #{nums.uniq}"

#2 - Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)
p nums.push 5
p nums.pop
p nums.shift
p nums.unshift 5
p nums.length

#3 - Use .include? to check if the array contains the number 8
p nums.include? 8

#4 - Use .find_all to find all the numbers greater than 10
p nums.find_all{ |num| num > 10}

#5 - use .all? to check if all the numbers are greater than 0?
p nums.all?{ |num| num > 0}

#6 - use any? to check if there are any numbers that are divisible by 8
p nums.any?{|num| num >= 8 && num % 8 == 0}

#7 - use .count to let you know how many numbers are greater than 4
p nums.count{|num| num > 4}

#8 - use .each_with_index to print each item times its index
nums.each_with_index{ |num, index| print "#{num * index}, "}
puts "\n"

#9 - .find the number that is divisible by 7 and 5 and is greater than 0
p nums.find{|num| num % 7 == 0 && num % 5 == 0 && num > 0}

#10 - .find_index of the number that is divisible by 5 and 7 and is greater than 0
p nums.find_index{|num| num % 7 == 0 && num % 5 == 0 && num > 0}

#11 - return the .first 3 numbers
p nums.first(3)

#12 - return the .last 5 numbers
p nums.last(5)

#13 - .group_by the modulo of 3 ( % 3 )
p nums.group_by{|num| num % 3}

#14 - use minmax to return the smallest and largest number
p nums.minmax

#15 - use .reject to return all the numbers that are NOT divisible by 3
p nums.reject{|num| num % 3 != 0}

#16 - use .select to return all the numbers divisible by 5
p nums.select{|num| num % 5 == 0}

puts "\n"
###################################
p "###################################"
p "Color Array"
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

#1 - Print out a random color.
p colors.sample

#2 - Print out the colors array in reverse order.
p colors.reverse

#3 - Print out all of the colors in the array with all capital letters.
colors.each{|color| print "#{color.upcase}, "}

puts "\n\n"

###################################
p "###################################"
p "Methods:"

#Write a method named find_area that finds the area of a rectangle when given values for width and height
def find_area height, width
 height * width
end

p find_area 5,4
p find_area 6,8

# Write a method named multiply_each_by_five that will loop over the given nums array below and print each number multiplied by 5
moreNums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
def multiply_each_by_five array
    array.each{|num| print "#{num * 5}, "}
end

multiply_each_by_five moreNums

puts "\n\n"

###################################
p "###################################"
p "Methods With a Hash"

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

# Write a method named print_price that will take in any hash and return the price of the item.
def print_price hash
    hash[:price]
end

p print_price book
p print_price lamp
p print_price table

# - Write a method named print_item_sums that will take in two hashes and will return the sum of the prices for the items in the hashes.
def print_item_sums hash1, hash2
    hash1[:price] + hash2[:price]
end

p print_item_sums table, book
p print_item_sums book, lamp

puts "\n"


###################################
p "###################################"
p "Euler Problem 1"

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#Find the sum of all the multiples of 3 or 5 below 1000.

def findMultiples limit
    arr = (1...limit).to_a
    arr.select!{|num| num % 3 == 0 || num % 5 == 0}
    p arr
    arr.sum
end

p findMultiples 1000

puts "\n"

###################################
p "###################################"
p "Pandigital Numbers"
arr1 = [2,3,5,1,4]
arr2 = [1,2,2,3,5]

def isPandigital? arr
  arr.sort!
  arr.each_with_index{|num,index|
    if num != index+1
    return false
    end
  }
  return true
end

print "is #{arr1} pandigital? "
puts isPandigital? arr1

print "is #{arr2} pandigital? "
puts isPandigital? arr2

puts "\n"

###################################
p "###################################"
p "Word Frequency"

#Word Frequency
#Write a method that will find the word that appears in a given sentence with the greatest frequency. If there is a tie, either of the words will do as a result.

sentence1 = "What we've got here is failure to communicate. Some men, you just can't reach. So you get what we had here last week -- which is the way he wants it. Well, he gets it. And I don't like it anymore than you men."

sentence2 = "My name is Maximus Decimus Meridius, Commander of the Armies of the North, General of the Felix Legions, loyal servant to the true emperor, Marcus Aurelius. Father to a murdered son, husband to a murdered wife. And I will have my vengeance, in this life or the next."

def wordFrequency sentence
    sentence.gsub!(/[.!?\\-]/, "") #remove punctuation
    arr = sentence.downcase.split(" ") #doncase and convert to array
    #arr.sort! # not required
    stackedArr = {} # define new hash

    #iterates through if word is already a key in hash then creates with value of 1, otherwise adds 1 to existing value
    arr.each{
        |word|
        if stackedArr[word] == nil
            stackedArr[word] = 1
        else
            stackedArr[word] += 1
        end
    }
    
    #finds max value by value then returns key value pair
    stackedArr.max_by{|key,value| value}
end

p wordFrequency sentence1
p wordFrequency sentence2

puts "\n"

###################################
p "###################################"
p "MBTA Problem"
#https://git.generalassemb.ly/ira/SEIR-FLEX-123/blob/master/unit_4/w18d1/student_labs/bonus.md

$red_line = ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"]
$green_line = ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"]
$orange_line = ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]

#Create a method to calculate the total number of stops between stations on the "MBTA

def stopLocator stop

  result = $red_line.find_index stop
  if result != nil
    return ['red', result]
  end

  result = $green_line.find_index stop
  if result != nil
    return ['green', result]
  end

  result = $orange_line.find_index stop
  if result != nil
    return ['orange', result]
  end
  nil
end

def lineTransferLocator line
  if line == "red"
    return 1
  end
  if line == "green"
    return 1
  end
  if line == "orange"
    return 2
  end
end

def totalStop startStop, endStop
  startLoc = stopLocator startStop
   if startLoc == nil
    return "#{startStop} stop not found"
   end
  stopLoc = stopLocator endStop
  if stopLoc == nil
    return "#{endStop} stop not found"
  end

  if startLoc[0] == stopLoc[0]
    stopCount = (startLoc[1] - stopLoc[1]).abs
    return "There are #{stopCount} stops between #{startStop} and #{endStop}"
  end

  #find distance to transfer on current line
  startTravel = (lineTransferLocator(startLoc[0]) - startLoc[1]).abs 
  stopTravel = (lineTransferLocator(stopLoc[0]) - stopLoc[1]).abs 
  stopCount = startTravel + stopTravel

  return "There are #{stopCount} stops between #{startStop} and #{endStop}. \nYou must transfer at Park Street"
end

puts totalStop "Alewife", "Forest Hills"