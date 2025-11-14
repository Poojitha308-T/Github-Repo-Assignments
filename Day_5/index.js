function isPrime(num):{
if(num<=1) return false
if(num<=3) return false

if(num%2===0 || num%3===0)
{
    return false
}

for(let i=5;i*i<=num;i+=6)
{
    if(n % i ==0 || n % (i+2)==0)
    {
        return false
    }
}
return true
}
console.log(17)
console.log(299)