from numpy import true_divide


print("hello")

def helloWorld():
    print("hello world")

helloWorld()

def isPalindrome(theString):
    if len(theString) == 0 or len(theString) == 1:
     return True
    else:
        head = theString[0]
        middle = theString[1:-1]
        last = theString[-1]
    return head == last and isPalindrome(middle)

text = 'racecar'
print(text + " is a palindrome: " + str(isPalindrome(text)))






