from numpy import true_divide
print("Startin Is Palindrome Function")
#Check if first and last char of strin is equal if True continue until the end if everything True then isPalindrome = TRUE
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






