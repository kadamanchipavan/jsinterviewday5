//1Q
 hoistedvariable=3;
 console.log(hoistedvariable);
 var hoistedvariable

 //
 hoisted()
    function hoisted(){
console.log('hello')
    }

    //2Q
    // function tempo(){
    //     message="hello tempo";
    //     let message
    // }
    // tempo();
    //passed by value
    let a = 10;
    let b = a;
    b = a + 5;
    console.log(a)
    console.log(b)

    //passsed by reference
    let obj1 = {
        name: "pavan",
        rollNo: 118
    }
    let obj2 = obj1;

    obj2.rollNo = 135;
    console.log(obj1);
    console.log(obj2);

    //map & reduce
    //map
    let map=[2,3,4,5,6];
   let modifiedmap=map.map(function(element){
    return element*4
   })
   console.log(modifiedmap)

   //filter
   let fill= [10,20,30,40]
   let c = fill.filter(item=> item >10)
   console.log(c)


//6Q
let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise resolved")
    },3000)
})
  async function myFunction(){
    let result=await promise;
    console.log(result);
}
myFunction();

//7Q
function resolveafter2seconds(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Problem resolved")
        },2000)
    })
}
 async function asynccall(){
    console.log("function calling")
    const result =await resolveafter2seconds();
    console.log(result)
 }