import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect} from 'react'
import Back from "./back.png"
import Del from "./close.png"
import Add from "./add.png"
import Done from "./check_mark.png"
import Sky from "./sky.jpg"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


import { useBtnContext, BtnProvider } from "./context";


import MyName from "./MyName";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Test from "./Test";
import Page1 from "./Page1"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";;




function App() {
  
  // const [todos,setTodos]=useState([{name:'task1',done:false},{name:'task2',done:false}])
  const [todos,setTodos]=useState([])
  // const [todos1,setTodos1]=useState([])
  // const [todos2,setTodos2]=useState([])
  const [todos1,setTodos1]=useState([{name:'task1',done:false},{name:'task2',done:false},{name:'task3',done:false}])
  const [todos2,setTodos2]=useState([{name:'task4',done:false},{name:'task5',done:false},{name:'task6',done:false}])
  
  
  const [name,setName]=useState('peter')
  
  const [name1,setName1]=useState('123')
  
  const [show,Setshow]=useState('none');
  const [dis1,Setdis1]=useState('block');
  const [col,Setcol]=useState('#ebecf0');



  const showout=()=>{

    Setshow('block')
  
    Setdis1('none')
    Setcol('white')
  }
  



const clear=()=>{

  const newTodos1=[{name:'task1',done:false},{name:'task2',done:false},{name:'task3',done:false}]
  setName1('567')
  setTodos([newTodos1]);
  setTodos1([newTodos1]);
  setTodos2([newTodos1]);
}






  


  const [index,setIndex1]=useState('0')
  // const [task2,setTask2]=useState('')
  // const [task3,setTask3]=useState('')
  const [input,setInput]=useState('')

  const add=()=>{

      // if(task1==''){
      // setTask1(input)
      // }else if(task2==''){
      //   setTask2(input)
      // }else if(task3==''){
      //   setTask3(input)
      // }


      if(input!=''){
        const newTodos=[...todos]
        newTodos.push({name:input,done:false})
        setTodos(newTodos)
        setInput('')
    
      
      }
      
      
  }

  const del=(index)=>{
    const newTodos=[...todos]
    // console.log(newTodos[index])
    // console.log(index)
    // console.log(newTodos,index)
    newTodos.splice(index,1)
    console.log(newTodos)
    setTodos(newTodos)
   
  }




  const del1=(index)=>{
    const newTodos1=[...todos1]
    const newTodos=[...todos]
   
    // console.log(index)
    // console.log(newTodos1,index)
    // console.log(newTodos1)
    // console.log(newTodos1[0])
    const num=newTodos1.splice(index,1)
    


    setTodos1(newTodos1)
   
   
   
  }




  const del2=(index)=>{
    const newTodos2=[...todos2]
    const newTodos1=[...todos1]
   
    // console.log(index)
    // console.log(newTodos1,index)
    // console.log(newTodos1)
    // console.log(newTodos1[0])
    const num=newTodos2.splice(index,1)
//     console.log(num)
//     console.log(newTodos1)
//     newTodos1.push(num[0])
// setTodos1(newTodos1)


    // console.log(newTodos1)
    setTodos2(newTodos2)
   
   
    
    
   
    
   
  }

  const finish=(index)=>{
    const newTodos1=[...todos1]
    const newTodos2=[...todos2]
   
    // console.log(index)
    // console.log(newTodos1,index)
    // console.log(newTodos1)
    // console.log(newTodos1[0])
    const num=newTodos1.splice(index,1)
    console.log(num)
    console.log(newTodos1)
    newTodos2.push(num[0])
setTodos2(newTodos2)


    // console.log(newTodos1)
    setTodos1(newTodos1)
   
  }
   
  



  const notfinish1=(index)=>{
    const newTodos1=[...todos1]
    const newTodos=[...todos]
   
    // console.log(index)
    // console.log(newTodos1,index)
    // console.log(newTodos1)
    // console.log(newTodos1[0])
    const num=newTodos1.splice(index,1)
    console.log(num)
    console.log(newTodos1)
    newTodos.push(num[0])
setTodos(newTodos)

console.log(newTodos)
    // console.log(newTodos1)
    setTodos1(newTodos1)
   
   
   
  }






  const start=(index)=>{
     const newTodos1=[...todos1]
    const newTodos=[...todos]
   
    // console.log(index)
    // console.log(newTodos1,index)
    // console.log(newTodos1)
    // console.log(newTodos1[0])
    const num=newTodos.splice(index,1)
    console.log(num)
    console.log(newTodos1)
    newTodos1.push(num[0])
setTodos1(newTodos1)

console.log(newTodos)
    // console.log(newTodos1)
    setTodos(newTodos)
   
   
   
  }


  const edit=(index)=>{
    
   
  }
  // useEffect(() => {
  //   setTodos(todos)
  // })
  const todoNewInput=(e)=>{
    setInput(e.target.value)
  }
  
  const check=(index)=>{
    const newTodos=[...todos]
  
  
  setTodos(newTodos)

  
  
  }
  
  



  const change=(event)=>{
    setTodos({name:"123",done:true})
  }



  return (
    <div className="App"  >



<Router>

<div className="App" style={{padding:"0"}}>
        




    {/* <div style={{display:"block",backgroundImage: `url(${require("./sky.jpg")})`}}>  */}
    
    <div style={{padding:"0px",display:"flex",width:"200px",float:"left",backgroundColor:"black",height:"100vh"}}>

    {/* <MyName style={{color:"white",backgroundColor:"blue"}} name={name}/> */}

          <ul >
             <p style={{color:"white"}}>新增任務</p>
            <li >
            <p style={{fontSize:"50px",color:"white"}}>任務清單</p>


            </li>
            <p style={{color:"white"}}>{name1}</p>
            <button onClick={clear} style={{backgroundColor:"red",color:"white"}}>新增任務</button>
            <li >
              <Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link>
            </li>
            <li >
              <Link style={{textDecoration:"none",color:"white"}} name={name} to="/MyName">MyName</Link>
            </li>
            <li>
              <Link style={{textDecoration:"none",color:"white"}}
                to={{
                  pathname: "/about",
                  state: {
                    from: "root"
                  }
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none",color:"white"}} to="/user/Jon/Harrys">User</Link>
            </li>

            <li>
              <Link style={{textDecoration:"none",color:"white"}} to="/Test">Test</Link>
            </li>
            <li>

            </li>



          </ul>

         
    

    
    



    </div>
    
    <div >
    

    {/* backgroundImage: `url(${require("./sky.jpg")})` */}





    
    
       



</div>

     

<Link to="/">Home</Link>
{/* <div style={{backgroundColor:"red"}}> */}
 
<div>

 
  <div>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/myname" name={name} component={MyName} />
    <Route path="/about" component={About} />
    <Route path="/user/:firstname/:lastname" component={User} />
    <Route exact path="/test" component={Page1} />
  </Switch>
</div>

  
</div>



      </div>
</Router>

    </div>
  );
}

export default App;
