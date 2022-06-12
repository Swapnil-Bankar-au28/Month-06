def Repeat(A,k):

   
    n=len(A)
    for i in range(n):

        for j in range (i+1,n):

            if A[i]==A[j] and abs(i-j)>=k:
                
                print("no")
                i +=1
            else:
                print("yes")
             
                j+=1
            
            return
# N,k = list(map(int,input().split()))
# a=list(map(int,input().split()))

n,k=map(int,input().split())
a=list(map(int,input().split()))
print(Repeat(a,k))