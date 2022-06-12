def MaxSubstring(s):

    ans =1
    # n=len(s)
    temp= 1

    for i in range (1,len(s)):
        
        if (s[i]==s[i-1]):

            temp +=1
        else:

            ans=max(ans,temp)
            temp=1

    ans= max(ans,temp)
    return ans


s = input()
 
# Function call
print (MaxSubstring(s))

# def substring(s):

#     i=0
#     j=0
#     ch=""

#     for i in range (1,len(s)):
#         if (s[i]==s[j+1]):

#             ch= i+1

#         else:

#             i=1
#             # ch=max(i,j)
#     return ch
# s = input()
 
# # Function call
# print (substring(s))

# def maxRepeating(sequence):
#     c = 0
#     temp = word
#     while 1:
#         if temp in sequence:
#             c += 1
#             temp += word
#         else:
#             break
#     return c
# s = "attcggga"
# word='g'
 
# # Function call
# print ( maxRepeating(s, word))