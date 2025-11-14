function signup(userName){
    let arr=["Poojitha","Hema","Divya","Rasi"]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==userName)
        {
            return "User Already Registered, Please Login"
        }
    }
    arr.push(userName)
    return "Signup Sucessfull, Please Login"
}
console.log(signup("Meghana"))


function login(userName, password){
    let arr=["Poojitha","Hema","Divya","Rasi"]
    
    if(!arr.includes(userName))
    {
        return "User Not Found, Please Signup"
    }
    if(password==="Emp@123"){
        return "Login Sucessfull"
    }
    else{
        return "Wrong Password"
    }
}
console.log(login("Poojitha","Emp$321"))