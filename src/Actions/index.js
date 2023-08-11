export const add=(obj)=>{
    return {
        type:"add",
        payload:obj
    }
}
export const remove=(id)=>{
    return {
        type:"remove",
        payload:id
    }
}
export const addTotal=(num)=>{
    return {
        type:"addTotal",
        payload:num
    }
}

export const subTotal=(num)=>{
    return {
        type:"subTotal",
        payload:num
    }
}

export const changeQty=(num,id)=>{
    return {
        type:"changeQty",
        payload:num,
        id:id
    }
}

export const addToQtyCountList=(id)=>{
    return {
        type:"addToQtyCountList",
        id:id
    }
}
export const deleteFromQtyCountList=(id)=>{
    return {
        type:"deleteFromQtyCountList",
        id:id
    }
}

export const incQtyCount=(id)=>{
    return {
        type:"incQtyCount",
        id:id
    }
}

export const decQtyCount=(id)=>{
    return {
        type:"decQtyCount",
        id:id
    }
}