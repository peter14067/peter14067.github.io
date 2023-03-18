import logo from './logo.svg';
import './App.css';
import React ,{useState, useEffect} from 'react'
import Back from "./back.png"
import Del from "./close.png"
import Add from "./add.png"
import Done from "./check_mark.png"
import Sky from "./sky.jpg"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillDiff } from "react-icons/ai";
import { BiCaretLeft,BiCheck,BiX,BiPlus
} from "react-icons/bi";


import Home from "./Home";
import About from "./About";
import User from "./User";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";;


function Page1() {
  
  // const [todos,setTodos]=useState([{name:'task1',done:false},{name:'task2',done:false}])
  const [todos,setTodos]=useState([])
  // const [todos1,setTodos1]=useState([])
  // const [todos2,setTodos2]=useState([])
  const [todos1,setTodos1]=useState([{name:'task1',done:false},{name:'task2',done:false},{name:'task3',done:false}])
  const [todos2,setTodos2]=useState([{name:'task4',done:false},{name:'task5',done:false},{name:'task6',done:false}])

  const [show,Setshow]=useState('none');
  const [dis1,Setdis1]=useState('block');
  const [col,Setcol]=useState('#ebecf0');






const clear=()=>{

  const newTodos1=[{name:'task1',done:false},{name:'task2',done:false},{name:'task3',done:false}]
  
  setTodos([newTodos1]);
  setTodos1([newTodos1]);
  setTodos2([newTodos1]);
}

  const saveToLocalStorage = words => {
    window.localStorage.setItem("words", words);
  };



  const [words, setWords] = useState(
    // window.localStorage.getItem("words") == null
    //   ? ""
    //   : 
      
      
      
    
      []
  );
  
  const [words1, setWords1] = useState(
  
    
    
  

        // newWords1.push({window.localStorage.getItem("word")});
        // setWords1(newWords1);
  

  );
  



  const showout=()=>{

    Setshow('inline-block')
  
    Setdis1('none')
    Setcol('white')
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
       


        const newWords=[...words]
        
        newWords.push(input)
        setWords(newWords)
        //  console.log(newWords)
        
         
        //   console.log(words)


        // console.log(newWords
        //   )
        // setTodos(newWords)
        // setInput('')
    window.localStorage.setItem("words",JSON.stringify(newWords) );
     setInput('')
console.log(words1)
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
    





<div className="App" style={{display:"flex"}} >
        

 
<button onClick={clear} style={{backgroundColor:"red",color:"white"}}>新增任務</button>
    {/* <div className='icon'>
      <BsFillArrowLeftCircleFill/>
    </div> */}






    {/* <div style={{display:"block",backgroundImage: `url(${require("./sky.jpg")})`}}>  */}
    
  
    <div style={{padding:"10px",display:"flex",width:"100%",marginLeft:"5px",height:"auto"}}>
    <div style={{display:"flex",marginLeft:"4px",display:"flex",display:"inline-block",background:"#ebecf0 ",width:"25%",borderRadius:'10px',verticalAlign:"middle"}}>
    { BsFillArrowLeftCircleFill } 
<p style={{fontSize:"20px",textAlign:"center",color:"black"}}>未完成任務</p>
      {/* <p style={{background:"white",width:"100%",height:"50%"}}>{count}</p> */}
      {/* <p style={{padding:"1%",background:"white",width:"auto",height:"50%"}}>{task1}</p>
      <p style={{padding:"1%",background:"white",width:"auto",height:"50%"}}>{task2}</p>
      <p style={{padding:"1%",background:"white",width:"inherit",height:"50%"}}>{task3}</p> */}

        
      <div style={{width:"auto"}}>

        
      {words1}

{/*        
      {words.map((word,index)=>(
        <div>{word}</div>
      

      ))}  */}



      {todos.map((todo,index)=>(
        
        <div style={{backgroundColor:"white",borderRadius:'10px',display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
           {/* <input onChange={()=>check(index)} type="checkbox"/>  */}
          <p style={{marginLeft:"10px",marginRight:"auto"}}>
            {todo.name}
            {/* {JSON.stringify(todo)} */}
          </p>

          <button onClick={()=>start(index)} style={{backgroundColor:"white",border:"none"}}>
            
            
            
            
          <div className='icon1'>
          <BiCheck/>
          
          </div>
            
            
            </button>
          <button onClick={()=>del(index)} style={{backgroundColor:"white",border:"none"}}>
            
            
            

          <div className='icon1'>
            
            <BiX/>
            </div>
            
            
            </button>
          </div>



      ))}

      

      

      
     
     </div>

     
      <div style={{marginTop:"10%",backgroundColor:col,borderRadius:'10px 10px',verticalAlign:"middle"}}>
      
      {/* <p style={{display:"inline"}}>請輸入任務</p> */}
      {/* <input style={{textAlign:"center"}}value={input} onChange={todoNewInput} placeholder="請輸入專案名稱"/> */}
      
      
        <div style={{display:"inline-block",height:"auto"}}>
      <textarea style={{width:"100%",display:show,borderRadius:'10px',border:"none",outline:"none",color:"#979EAF"}}value={input} onChange={todoNewInput} placeholder="為這張卡片輸入標題..." />
      </div>
     
      
      
      </div>

      <button onClick={add} style={{marginBottom:"2px",marginTop:"10px",width:"33%",verticalAlign:"middle",backgroundColor:"#0078BE",color:"white",display:show}}>新增卡片</button>
      {/* <button onClick={add} style={{border:"none",verticalAlign:"middle"}}><img src={Add} style={{width:"40%",border:"none",verticalAlign:"middle",border:"none",display:show}} /></button> */}





      <div style={{display:"flex",marginBottom:"0"}}>


<p style={{display:dis1,color:"#979EAF"}}>新增卡片</p>
<button onClick={showout} style={{border:"none",background:"#ebecf0 ",verticalAlign:"middle",display:dis1}}>
 
<div className = "icon1" style={{display:"flex"}}>
  {/* <AiFillDiff/> */}
  <BiPlus/>
  </div>
  </button>


</div>

    </div>

    {/* backgroundImage: `url(${require("./sky.jpg")})` */}





    
    <div style={{width:"33%",display:"flex",display:"inline-box",marginLeft:"1.5vw",background:"#ebecf0 ",width:"33%",padding:"1%",verticalAlign:"middle",borderRadius:'10px'}}>

          


        



    <p style={{fontSize:"20px",textAlign:"center"}}>進行中</p>

        <div >
{/*           
{todos1.map((todo1,index)=>(
        <div style={{backgroundColor:"white",borderRadius:'10px',display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>

          <p style={{marginLeft:"10px",marginRight:"auto"}}>
            
            {todo1.name}
          </p>

         
          <button onClick={()=>notfinish1(index)}style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>

          <div className='icon1'>
          <BiCaretLeft/>
          
          </div>
          
          
          </button>
          <button onClick={()=>finish(index)} style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>
          
          
          <div className='icon1'>
          <BiCheck/>
          </div>
          </button>
         
          <button onClick={()=>del1(index)}style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>
            
            
          <div className='icon1'>
            
            <BiX/>
            </div>
            </button>
          

          
          </div>



      ))} */}

{todos1.map((todo1,index)=>(
        <div style={{backgroundColor:"white",borderRadius:'10px',display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
           {/* <input onChange={()=>check(index)} type="checkbox"/>  */}
          {/* <p style={{marginLeft:"10px",backgroundColor:"white",display:"inline-block",textAlign:"left"}}> */}
          <p style={{marginLeft:"10px",marginRight:"auto"}}>
            
            {todo1.name}
          </p>

         
          <button onClick={()=>notfinish1(index)}style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>

          <div className='icon1'>
          <BiCaretLeft/>
          
          </div>
          
          
          </button>
          <button onClick={()=>finish(index)} style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>
          
          
          <div className='icon1'>
          <BiCheck/>
          </div>
          </button>
         
          <button onClick={()=>del1(index)}style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>
            
            
          <div className='icon1'>
            
            <BiX/>
            </div>
            </button>
          

          
          </div>



      ))}


      

</div>

</div>




       

<div style={{textAlign:"center",marginLeft:"1.5vw",background:"#ebecf0 ",width:"33%",padding:"1%",verticalAlign:"middle",borderRadius:'10px'}}>



<p style={{fontSize:"20px"}}>已完成</p>


{todos2.map((todo2,index)=>(
        <div style={{backgroundColor:"white",borderRadius:'10px 10px',display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
           {/* <input onChange={()=>check(index)} type="checkbox"/>  */}
          <p style={{marginLeft:"10px",marginRight:"auto"}}>
            {todo2.name}
          </p>

          
          <button onClick={()=>del2(index)}style={{backgroundColor:"white ",border:"none",verticalAlign:"middle"}}>
            
            
          <div className='icon1'>
            
            <BiX/>
            
          
          

          
          </div>
            </button>
          </div>



      ))}

</div>

</div>

      {/* {todos.map((todo,index)=>{


        return(
          <div>
            <input onChange={()=>check(index)} type="checkbox"/>
            <p style={{display:'inline',textDecoration:todo.done?'line-through':''}}>{todo.name}</p>
          </div>
        )


      }
      )} */}
      

      {/* <p>{notDoneCount}未完成／{todos.length  }總數</p>
      <div>
        <input value={input} onChange={todonewInput}/>

        
        <button onClick={add}>新增任務  

        </button>
       
      </div> */}
 


      </div>


   
  );
}
export default Page1;

