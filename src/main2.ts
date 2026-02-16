interface User{
    readonly id:number;
    username:string;
    nickname?:string;
}

function displayUser(targetUser:User):string{
    if(!targetUser.nickname){
        return `Hello, ${targetUser.username}`;
    }
    return `Hello, ${targetUser.nickname}`;
}

const sampleUser:User = {
    id:1,
    username:"hibi",
    nickname:"hibichan"
}
const sampleUser2:User = {
    id:3,
    username:"sample"
}
console.log(displayUser(sampleUser));
console.log(displayUser(sampleUser2));

/*
The User interface has three properties.
These are id (number), username (string), nickname (string).
The id property is readonly.
So if you try to change id, your IDE notices that you can't change id after defining a user.
The nickname property is optional.
The displayUser function receives a targetUser (User).
It returns a greeting message including nickname, if targetUser has nickname property.
On the other hand, it returns a greeting message including username, if targetUser doesn't have the property.
*/