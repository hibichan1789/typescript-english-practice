interface APIResponse<T>{
    status:number; //e.g. 200
    data:T;
}

function wrapInResponse<T>(data:T):APIResponse<T>{
    return {status:200, data};
}

interface Sample{
    id:number;
    username:string;
}
const sampleData:Sample = {id:1, username:"hibichan"};

console.log(wrapInResponse<Sample>(sampleData));

/*
T is a generics type parameter.
If you use generics, you can define interfaces and functions more flexibly and strictly.
Generics provides the function to consistent input and output.
*/