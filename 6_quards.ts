const strip = (x: string | number) => {
    if(typeof x === "number"){
        return x.toFixed(2)
    }
    return x.trim
}

class MyRespons {
    header = "response header"
    result = " response result"
}

class ResponseError {
    header = " error header"
    message: " error message"
}

const info = (res: MyRespons | ResponseError) => {
    if( res instanceof MyRespons) {
        return {
            info: res.header + res.result
        }
    } else {
        return{
            info: res.header + res.message
        }
    }
}