const initialState=[];
const totalBal=0;
const qtyCount=[];
const products = [
    {
      id:1,
      src: "tamato.jpeg",
      ppi: 120,
      unit: "Kg",
      name: "Tomato",
      quantity: 20,
      category: "cat1",
      cart:0
    },
    {
      id:2,
      src: "potato.jpeg",
      ppi: 25,
      unit: "Kg",
      name: "Potato",
      quantity: 50,
      category: "cat1",
      cart:0
    },
    {
      id:3,
      src: "mango.jpeg",
      ppi: 100,
      unit: "Kg",
      name: "Mango",
      quantity: 100,
      category: "cat2",
      cart:0
    },
    {
      id:4,
      src: "lady-finger.jpeg",
      ppi: 200,
      unit: "Kg",
      name: "Lady Finger",
      quantity: 120,
      category: "cat3",
      cart:0
    },
    {
      id:5,
      src: "karila.jpeg",
      ppi: 50,
      unit: "Kg",
      name: "Karila",
      quantity: 50,
      category: "cat3",
      cart:0
    },
    {
      id:6,
      src: "apple.jpeg",
      ppi: 100,
      unit: "Kg",
      name: "Apple",
      quantity: 20,
      category: "cat2",
      cart:0
    },
    {
      id:7,
      src: "banana.jpeg",
      ppi: 50,
      unit: "Dozen",
      name: "Banana",
      quantity: 200,
      category: "cat2",
      cart:0
    },
    {
      id:8,
      src: "jackfruit.jpeg",
      ppi: 35,
      unit: "Kg",
      name: "JackFruit",
      quantity: 200,
      category: "cat1",
      cart:0
    },
    {
      id:9,
      src: "pumpkin.jpeg",
      ppi: 50,
      unit: "Kg",
      name: "Pumpkin",
      quantity: 200,
      category: "cat1",
      cart:0
    },
  ];
const changeTheCart=(state=initialState,action)=>{
    switch(action.type){
        case "add":
            state.push(action.payload);
            let n=state.filter((ele)=>{
                return ele.name!=='';
            })
            return n;
        case "remove":
                let newstate=state.filter((ele)=>{
                    return ele.id!==action.payload;
                });
                return newstate;
        default:return state;
    }
}
export const changeTotal=(state=totalBal,action)=>{
    switch(action.type){
        case "addTotal":
            return state+action.payload;
    
        case "subTotal":
            if(state-action.payload>=0)
                return state=state-action.payload;
            return 0;
        default:return state;
    }
}
export const productsInStock=(state=products,action)=>{
    switch(action.type){
        case "changeQty":
            const index=state.findIndex((obj)=>{
                return obj.index===action.id;
            });
            if(index>=0)
            state[index].quantity=action.payload;
            return state;
        default:return state;
    }
}
export const changeQtyCount=(state=qtyCount,action)=>{
    switch(action.type){
        case "incQtyCount":
            let index=state.findIndex((obj)=>{
                return obj.id===action.id;
            });
            if(index>=0)
            state[index].count+=1;
            return state;
        case "decQtyCount":
            let i=state.findIndex((obj)=>{
                return obj.id===action.id;
            });
            if(i>=0)
            if(state[i].count-1>=0)
                state[i].count-=1;
            return state;
        case "addToQtyCountList":
            state.push({id:action.id,count:0});
            return state;
        case "deleteFromQtyCountList":
            let newstate=state.filter((ele)=>{
                return ele.id!==action.id;
            });
            return newstate;
        default:return state;
    }
}
export default changeTheCart;