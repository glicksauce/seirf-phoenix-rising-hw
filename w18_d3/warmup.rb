#warmup exercise with classes
class Person
    attr_reader :age

    def initialize
        @age = 0
    end

    def get_older
        @age = @age + 1
    end
end

class Student < Person
    def slogan
        "Ruby is cool"
    end
end

jay = Student.new
p jay.age
p jay.slogan