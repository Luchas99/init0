inputArray = ["aba", 
 "aa", 
 "ad", 
 "vcd", 
 "aba"]

print(inputArray)

max = 0
newArray = [];

for x in inputArray:
    if(len(x) > max):
        max = len(x)

for x in inputArray:
    if(len(x) == max):
        newArray.append(x)

print(newArray) 






