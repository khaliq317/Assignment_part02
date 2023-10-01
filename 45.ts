function car (param:{
    manufacturer:string,
    modelName:string,
    color:string,
    price?:number
}){
    console.log(param);
};

let obj = {
     manufacturer:"Honda",
     modelName:"corolla",
     color:"white",
     price:30000
    };

   car(obj);
