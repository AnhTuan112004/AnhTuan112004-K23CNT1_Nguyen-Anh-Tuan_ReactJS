import React from 'react'

export default function NatJsxExpression() {
     // Biến
     const name = "Nguyễn Anh Tuấn";
     const user = {
         fristName: "Tuấn",
         lastName: "Anh"
     }
     // hàm
     const fullName=(user)=>{
         return   user.fristName + " " + user.lastName ;
 
     }
     // element
     const element = (
         <div>
             {/* Biểu thức Jsx */}
             <p >{fullName(user)}</p>
             <hr/>
             <h2 >Welcome to {name}</h2>
         </div>
     );
     // hàm
     const sayWelcome = (name)=>{
         if(name)
         {
             return <h4>Welcome to {name}</h4>
         }
         else{
             return <h3 > Welcome to K23CNT3</h3>
         }
     }
  return (
    <div>
       <h1>Đây là  JSX Expression </h1>
        {/* sử dụng biến element */}
        {element}
        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome(name)}
    </div>
  )
}
