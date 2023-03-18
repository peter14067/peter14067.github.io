import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import Back from "./back.png";
import Del from "./close.png";
import Add from "./add.png";
import Done from "./check_mark.png";
import Sky from "./sky.jpg";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillDiff } from "react-icons/ai";
import { BiCaretLeft, BiCheck, BiX, BiPlus } from "react-icons/bi";
import { FaTrello } from "react-icons/fa";
import {MdPlayCircleOutline, MdWorkOff ,MdPause} from "react-icons/md";



import Home from "./Home";
import About from "./About";
import User from "./User";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { prettyDOM } from "@testing-library/react";

function App() {
  // const [todos,setTodos]=useState([{name:'task1',done:false},{name:'task2',done:false}])
  
  const initState = {
    count: 0,
    start: false,
    times: 1
  };
  
  // const [count, setCount] = useState(initState.count);
  const [costtime,setCosttime]=useState(0)


  const [nowindex,setInder]=useState(0)
  const [count, setCount] = useState(0);
  const [maktime,setMakeTime] =useState(0);
  const [timing, setTiming] = useState([
    { name: "task1", done: false ,costtime:count},
    { name: "task2", done: false ,costtime:count},
    
  ])  


  const [timing1,setTiming1] = useState(Object.keys(timing));

  const [totaltime,setTotalTime] = useState('')
  const [final, setFinal] = useState({
    myWorkSpace: {
      notfinish: [
        { name: "task1", done: false },
        { name: "task2", done: false },
        { name: "task3", done: false },
      ],
      doing: [
        { name: "task4", done: false,spenttime:maktime ,costtime:count},
        { name: "task5", done: false,spenttime:maktime ,costtime:count},
        { name: "task6", done: false,spenttime:maktime ,costtime:count},
      ],
      finish: [
        { name: "task7", done: false },
        { name: "task8", done: false },
        { name: "task9", done: false },
      ],
    },
    台北行程: {
      notfinish: [
        { name: "完成第二個作品集", done: false },
        { name: "寫一個系統", done: false },
        { name: "面試", done: false },
      ],
      doing: [
        { name: "寫程式", done: false ,costtime:'總花費時間'},
        { name: "跑lalamove", done: false,costtime:'總花費時間'},
        { name: "第一個作品", done: false ,costtime:'總花費時間'},
      ],
      finish: [
        { name: "找一年房子", done: false },
        { name: "咖啡廳待滿", done: false },
        { name: "雲端發票應用", done: false },
      ],
    },
    trello作品集: {
      notfinish: [
        { name: "時鐘計時器", done: false },
        { name: "css刻板", done: false },
      ],
      doing: [
        { name: "css畫精緻", done: false ,costtime:'總花費時間'},
        { name: "trello進階功能", done: false,costtime:'總花費時間' },
      ],
      finish: [
        { name: "trello基本功能", done: false },
        { name: "trello第一版css", done: false },
      ],
    },
  });

  const [comedown, setComedown] = useState(10);
  const [todos, setTodos] = useState([
    { name: "task1", done: false },
    { name: "task2", done: false },
    { name: "task3", done: false },
  ]);
  // const [todos1,setTodos1]=useState([])
  // const [todos2,setTodos2]=useState([])
  const [todos1, setTodos1] = useState([
    { name: "task4", done: false },
    { name: "task5", done: false },
    { name: "task6", done: false },
  ]);
  const [todos2, setTodos2] = useState([
    { name: "task7", done: false },
    { name: "task8", done: false },
    { name: "task9", done: false },
  ]);

  const [idList, setIdlist] = useState(Object.keys(final));

  const [show, Setshow] = useState("none");
  const [showlist, Setshowlist] = useState("none");

  const [showdis, Setshowdis] = useState("inline-block");
  const [dis1, Setdis1] = useState("block");
  const [col, Setcol] = useState("#ebecf0");

  const [save, setSave] = useState([]);
  const [list, setList] = useState([]);
  const [nowWorkspace, setNowWorkspace] = useState("myWorkSpace");

  const add1 = () => {
    if (input != "") {
      const newTodos = [...todos];
      newTodos.push({ name: input, done: false });
      setTodos(newTodos);

      const newWords = [...words];

      newWords.push(input); 
      setList(newWords);

      window.localStorage.setItem("words", JSON.stringify(newWords));
      setInput("");
      console.log(words1);
    }
  };

  const [time, setTime] = useState(5);
  const [time1, setTime1] = useState('');
  const [addtime, setAddTime] = useState(0);
  // 點擊按鈕後開始倒數
  // 
  

    const [numm,setNum]=useState(0)
    const [start, setStart]=  useState(initState.start);
    const [times, setTimes] = useState(initState.times);

    const inc = () => setCount(count + 1);
    const desc = () => setCount(count - 1);
    // const timerStart = (index) => setStart(true);
    const timerStart = (index) => {
      if(start==true){
      
        alert("有程序正在執行中")
        }else{
          setNum(index)
          console.log(numm)
     setStart(true);
        } 
    }
    
    const timerStart1 = () => {
      console.log(timing[0].name)
      // const newTodos=[{...timing[0].name,...timing[0].done,costtime:count}]
      const newTodos=[{name:timing[0].name, done: false ,costtime:count},
      { name: timing[1].name, done:"false" ,costtime:count },
     ]

     newTodos.count=count
     
      
     const newTodos1={...timing}
     
     console.log(count)
      
      // newTodos1[nowWorkspace]["doing"].splice(index, 1);
      // newTodos.push( { name:'task1', done: false },{name:"task2", done: false},{name:  "task3", done: false});
      // setTiming( [{ name:'task4', done: false },{name:"task5", done: false},{name:  "task6", done: false}])
      
      setTiming(newTodos)
      // setTiming(timing=>([...timing,{name:"456"}]))
      
      // setTiming(newTodos);
      console.log(timing)
      
     
    }
    
    const timerStop = (index) => {
     
      
      setStart(false)

      // setCount(count)
      // setCosttime(count)
      
      // const newTodos2= final[nowWorkspace]['doing']
      // console.log(newTodos2)
      // newTodos2.push({name: "寫程式", done: false ,costtime:'總花費時間'})
      // console.log(newTodos2)
      
      // const newTodos1 = {  myWorkSpace: {
      //   notfinish: [
      //     { name: "task1", done: false },
      //     { name: "task2", done: false },
      //     { name: "task3", done: false },
      //   ],
      //   doing: [
      //     { name: final[nowWorkspace]['doing'][index].name, done: false, costtime:count},
       
      //   ],
      //   finish: [
      //     { name: "task7", done: false },
      //     { name: "task8", done: false },
      //     { name: "task9", done: false },
      //   ],
      // },
      // 台北行程: {
      //   notfinish: [
      //     { name: "完成第二個作品集", done: false },
      //     { name: "寫一個系統", done: false },
      //     { name: "面試", done: false },
      //   ],
      //   doing: [
      //     { name: "寫程式", done: false ,costtime:'總花費時間'},
      //     { name: "跑lalamove", done: false,costtime:'總花費時間'},
      //     { name: "第一個作品", done: false ,costtime:'總花費時間'},
      //   ],
      //   finish: [
      //     { name: "找一年房子", done: false },
      //     { name: "咖啡廳待滿", done: false },
      //     { name: "雲端發票應用", done: false },
      //   ],
      // },
      // trello作品集: {
      //   notfinish: [
      //     { name: "時鐘計時器", done: false },
      //     { name: "css刻板", done: false },
      //   ],
      //   doing: [
      //     { name: "css畫精緻", done: false ,costtime:'總花費時間'},
      //     { name: "trello進階功能", done: false,costtime:'總花費時間' },
      //   ],
      //   finish: [
      //     { name: "trello基本功能", done: false },
      //     { name: "trello第一版css", done: false },
      //   ],
      // }};
      // const newTodos1 = { ...final['myWorkSpace']['doing'][index],costtime:count};
      // newTodos1.push({...final,costtime:count})
      
    //   newTodos1.push({...final['myWorkSpace']['doing'][index],costtime:count})
    //   console.log(newTodos1)
    // setFinal(final)
     
    const newTodos3={...final}
    newTodos3[nowWorkspace]['doing'][index].costtime=count
    setFinal(newTodos3)
    console.log(newTodos3[nowWorkspace]['doing'][index])
  //  setFinal(newTodos2)

      // setFinal(newTodos1)
      
      
     
      // newTodos1[nowWorkspace]["doing"].push({
      //   name: newTodos2.name,
      //   done: false,
      //   costtime:count
      // });
      
      setCosttime(0)
      setCount(0)
    
    alert('總花費'+count+'秒');



    }

    
    const handleTwoTimes = () => (times === 2 ? setTimes(1) : setTimes(2));
    const reset = () => {
      setCount(initState.count);
      setStart(initState.start);
      setTimes(initState.times);
    };
 

  
  const startCountDown = () => {
  
   
      
    
  };

  useEffect(
    () => {
      if (!start) {
      
        return;
      }
      let id = setInterval(() => {
  // console.log(index)
        setCount(count=>count+1);
        // console.log(costtime)
        // console.log(count)
        setCosttime(count);
        
        
        setMakeTime(count+1)
        const newTodos1={...final}
        newTodos1[nowWorkspace]['doing'][numm].spenttime=count+1
     
        console.log( newTodos1[nowWorkspace]['doing'][index].spenttime)
        setFinal(newTodos1);
        // console.log(final)
      }, 1000 / times);
      return () => clearInterval(id);
      
    },
    // [start, times]
  );

  const addlist = () => {
    Setshowlist("inline-block");
    Setshowdis("none");

    console.log(final["myWorkSpace"]["notfinish"]);
  };

  const addlist1 = () => {
    Setshowdis("inline-block");
    Setshowdis("none");

    if (input1 != "") {
      const newTodos1 = { ...final };
      const newTodos2 = { ...final[nowWorkspace]["notfinish"][index] };
      const i = 0;

      console.log(idList.indexOf(input1));
      if (idList.indexOf(input1) == 0) {
        alert("檔案已存在，請換一個檔名");
      } else {
        // newTodos1[nowWorkspace]["notfinish"].push({ name: input, done: false });
        newTodos1[input1] = { notfinish: [], doing: [], finish: [] };
        setFinal(newTodos1);

        setIdlist(Object.keys(newTodos1));
        setInput1("");
      }
      // save.push({ name: input, done: false });

      // setList(save);
      // setNowWorkspace(save)

      // window.localStorage.setItem("words",JSON.stringify(newWords) );
    }
  };
  const clear = (index) => {
    const lis = [...idList];
    console.log(final);
    console.log(lis[index]);
    setNowWorkspace(lis[index]);
  };

  const saveToLocalStorage = (words) => {
    window.localStorage.setItem("words", words);
  };

  const [words, setWords] = useState(
    // window.localStorage.getItem("words") == null
    //   ? ""
    //   :

    []
  );

  const [words1, setWords1] = useState();

  // newWords1.push({window.localStorage.getItem("word")});
  // setWords1(newWords1);

  const showout = () => {
    if (input != "") {
      const newTodos = [...final];

      newTodos.push({ name: input, done: false });
      setTodos(newTodos);

      const newWords = [...words];

      newWords.push(input);
      setWords(newWords);

      window.localStorage.setItem("words", JSON.stringify(newWords));
      setInput("");
      console.log(words1);
    }
    Setshow("inline-block");

    Setdis1("none");
    Setcol("white");
  };

  const [index, setIndex1] = useState("0");

  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");

  const add = () => {
    if (input != "") {
      // newTodos.splice(index, 1);
      // console.log(newTodos);
      // setTodos(newTodos);
      // console.log(final[nowWorkspace]['notfinish'])
      const newTodos1 = { ...final };
      console.log(input);
      console.log(final);
      console.log(newTodos1[nowWorkspace]["notfinish"]);
      newTodos1[nowWorkspace]["notfinish"].push({ name: input, done: false });

      setFinal(newTodos1);

      setInput("");
    }
  };

  const del = (index) => {
    const newTodos = [...todos];

    // newTodos.splice(index, 1);
    console.log(newTodos);
    // setTodos(newTodos);
    // console.log(final[nowWorkspace]['notfinish'])
    const newTodos1 = { ...final };
    console.log(newTodos1);
    newTodos1[nowWorkspace]["notfinish"].splice(index, 1);

    setFinal(newTodos1);
  };

  const del1 = (index) => {
    const newTodos = [...todos];

    const newTodos1 = { ...final };

    newTodos1[nowWorkspace]["doing"].splice(index, 1);

    setFinal(newTodos1);
  };

  const del2 = (index) => {
    const newTodos = [...todos];

    const newTodos1 = { ...final };

    newTodos1[nowWorkspace]["finish"].splice(index, 1);

    setFinal(newTodos1);
  };

  const finish = (index) => {
    const newTodos1 = { ...final };
    const newTodos2 = { ...final[nowWorkspace]["doing"][index] };
    console.log(newTodos2);
    // console.log(newTodos1);
    console.log(newTodos1[nowWorkspace]["finish"]);
    newTodos1[nowWorkspace]["finish"].push({
      name: newTodos2.name,
      done: false,
    });

    console.log(newTodos1);
    newTodos1[nowWorkspace]["doing"].splice(index, 1);

    setFinal(newTodos1);
  };

  const notfinish1 = (index) => {
    const newTodos1 = { ...final };
    const newTodos2 = { ...final[nowWorkspace]["doing"][index] };
    console.log(newTodos2);
    // console.log(newTodos1);
    console.log(newTodos1[nowWorkspace]["notfinish"]);
    newTodos1[nowWorkspace]["notfinish"].push({
      name: newTodos2.name,
      done: false,
    });

    console.log(newTodos1);
    newTodos1[nowWorkspace]["doing"].splice(index, 1);

    setFinal(newTodos1);
  };

  const startup = (index) => {
    // const newTodos = [...final[nowWorkspace]];
    // const newTodos1 = [...final[nowWorkspace]["doing"]];
    // console.log(newTodos)
    // const new1 = newTodos[index].name;
    // const new2 = newTodos1[index].name;

    // const num = newTodos.splice(index, 1);

    // newTodos1.push(num[0]);
    // setTodos1(newTodos1);

    // setFinal(num);

    const newTodos = [...todos];

    // newTodos.splice(index, 1);
    // console.log(newTodos);
    // setTodos(newTodos);
    // console.log(final[nowWorkspace]['notfinish'])
    const newTodos1 = { ...final };
    const newTodos2 = { ...final[nowWorkspace]["notfinish"][index] };
    console.log(newTodos2);
    // console.log(newTodos1);
    console.log(newTodos1[nowWorkspace]["doing"]);
    newTodos1[nowWorkspace]["doing"].push({
      name: newTodos2.name,
      done: false,
    });

    console.log(newTodos1);
    newTodos1[nowWorkspace]["notfinish"].splice(index, 1);

    setFinal(newTodos1);
  };

  const edit = (index) => {};
  // useEffect(() => {
  //   setTodos(todos)
  // })
  const todoNewInput = (e) => {
    setInput(e.target.value);
  };

  const todoNewInput1 = (e) => {
    setInput1(e.target.value);
  };

  const check = (index) => {
    const newTodos = [...todos];

    setTodos(newTodos);
  };

  const change = (event) => {
    setTodos({ name: "123", done: true });
  };

  return (
    // <div className="App" style={{ display: "flex" }}>
    <div className="App" style={{ display: "flex" }}>
      <div
        style={{
          padding: "0px",
          display: "flex",
          width: "200px",
          float: "left",
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        {/* <MyName style={{color:"white",backgroundColor:"blue"}} name={name}/> */}

        <div style={{ width: "200px" }}>
          {/* <button
            onClick={addlist}
            style={{ backgroundColor: "red", color: "white", display: showdis }}
          >
            新增看板
          </button> */}
          <div style={{ display: "flex", padding: "10px 2px" }}>
            <FaTrello style={{ height: "4vh", color: "white", width: "3vw" }} />

            <p
              style={{
                verticalAlign: "baseline",
                marginLeft: "0",
                fontFamily: "!important",
                color: "wheat",
              }}
            >
              trello工作空間
            </p>
          </div>
          <hr style={{ border: "1px solid rgb(54,67,68)" }} />

          <div style={{ display: "flex" }}>
            <p
              style={{
                marginLeft: "15px",
                color: "white",
                width: "300%",
                fontSize: "25px",
              }}
            >
              您的看板
            </p>
            <button
              onClick={addlist}
              style={{
                backgroundColor: "black",
                border: "white",
                color: "white",
                display: showdis,
              }}
            >
              <BiPlus style={{ fontSize: "2.5em" }} />
            </button>

            <div></div>
          </div>
          <input
            style={{
              display: showlist,
              height: "20px",

              borderRadius: "10px",
              border: "none",
              outline: "none",
            }}
            value={input1}
            onChange={todoNewInput1}
            placeholder="請替看板命名..."
          />

          <button
            onClick={addlist1}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",

              display: showlist,
            }}
          >
            <BiPlus />
          </button>

          {idList.map((todo, index) => (
            //  {final[0]?.map((todo, index) => (
            <div style={{ color: "white" }}>
              <button
                onClick={() => clear(index)}
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "10px",
                  marginRight: "auto",
                }}
              >
                <p style={{ color: "white" }}>{todo}</p>
                {/* {JSON.stringify(todo)} */}
              </button>
            </div>
          ))}
        </div>

        {/* 
          {list.map((lists, index) => (
            <div>
            
              <button
                onClick={() => clear(index)}
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "10px",
                  marginRight: "auto",
                }}
              >
                <li style={{ color: "white" }}>{lists.name}</li>
              
              </button>
            </div>
          ))} */}
      </div>
      {/* {JSON.stringify(todo)} */}
      {/* <div className='icon'>
      <BsFillArrowLeftCircleFill/>
    </div> */}

      {/* <div style={{display:"block",backgroundImage: `url(${require("./sky.jpg")})`}}>  */}

      <div style={{ width: "100vw", flexDirection: "column", display: "flex" }}>
        <p
          style={{
            marginLeft: "20px",
            fontSize: "20px",
            width: "fit-content",
            color: "white",
            textAlign: "left",
            backgroundColor: "rgb(0,24,24)",
          }}
        >
          看板：{nowWorkspace}
        </p>
        <div
          style={{
            padding: "1%",
            height: "min-height",

            display: "flex",
            width: "100%",
            marginLeft: "5px",
            height: "min-content",
            justifyContent: "left",
          }}
        >
          <div
            style={{
              padding: "1%",
              height: "min-content",
              display: "flex",
              marginLeft: "4px",
              display: "flex",
              display: "inline-block",
              background: "#ebecf0 ",
              width: "10%",
              borderRadius: "10px",
              verticalAlign: "middle",
            }}
          >
            {BsFillArrowLeftCircleFill}
            <p
              style={{ fontSize: "20px", textAlign: "center", color: "black" }}
            >
              待辦清單
            </p>

            <div style={{ width: "auto" }}>
              {words1}

              {/*        
      {words.map((word,index)=>(
        <div>{word}</div>
      

      ))}  */}

              {final[nowWorkspace]?.notfinish?.map((todo, index) => (
                // {todos.map((todo,index)=>(

                <div
                  style={{
                    padding: "10 10px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    wordBreak: "break-all",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    padding: "10px 10px",
                  }}
                >
                  {/* <input onChange={()=>check(index)} type="checkbox"/>  */}
                  <p style={{ marginLeft: "10px", marginRight: "auto" }}>
                    {todo.name}
                    {/* {JSON.stringify(todo)} */}
                  </p>

                  <button
                    onClick={() => startup(index)}
                    style={{ backgroundColor: "white", border: "none" }}
                  >
                    <div className="icon1">
                      <BiCheck />
                    </div>
                  </button>
                  <button
                    onClick={() => del(index)}
                    style={{ backgroundColor: "white", border: "none" }}
                  >
                    <div className="icon1">
                      <BiX />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "10%",
                backgroundColor: col,
                borderRadius: "10px 10px",
                verticalAlign: "middle",
              }}
            >
              {/* <p style={{display:"inline"}}>請輸入任務</p> */}
              {/* <input style={{textAlign:"center"}}value={input} onChange={todoNewInput} placeholder="請輸入專案名稱"/> */}

              <div style={{ display: "inline-block", height: "auto" }}>
                <textarea
                  style={{
                    width: "100%",
                    display: show,
                    borderRadius: "10px",
                    border: "none",
                    outline: "none",
                    color: "#979EAF",
                  }}
                  value={input}
                  onChange={todoNewInput}
                  placeholder="為這張卡片輸入標題..."
                />
              </div>
            </div>

            <button
              onClick={add}
              style={{
                marginBottom: "2px",
                marginTop: "10px",
                width: "33%",
                verticalAlign: "middle",
                backgroundColor: "#0078BE",
                color: "white",
                display: show,
              }}
            >
              新增卡片
            </button>
            {/* <button onClick={add} style={{border:"none",verticalAlign:"middle"}}><img src={Add} style={{width:"40%",border:"none",verticalAlign:"middle",border:"none",display:show}} /></button> */}

            <div style={{ display: "flex", marginBottom: "0" }}>
              <p style={{ display: dis1, color: "#979EAF" }}>新增卡片</p>
              <button
                onClick={showout}
                style={{
                  border: "none",
                  background: "#ebecf0 ",
                  verticalAlign: "middle",
                  display: dis1,
                }}
              >
                <div className="icon1" style={{ display: "flex" }}>
                  {/* <AiFillDiff/> */}
                  <BiPlus />
                </div>
              </button>
            </div>
          </div>

          {/* backgroundImage: `url(${require("./sky.jpg")})` */}

          <div
            style={{
              height: "min-content",
              width: "33%",
              display: "flex",
              display: "inline-box",
              marginLeft: "1.5vw",
              background: "#ebecf0 ",
              width: "10%",
              padding: "1%",
              verticalAlign: "middle",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "20px", textAlign: "center" }}>進行中 {count}</p>

            <div>
              {final[nowWorkspace]?.doing?.map((todo, index) => (
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "10px 10px",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    wordBreak: "break-all",
                  }}
                >
                  {/* <input onChange={()=>check(index)} type="checkbox"/>  */}
                  {/* <p style={{marginLeft:"10px",backgroundColor:"white",display:"inline-block",textAlign:"left"}}> */}
                  <p style={{ marginLeft: "10px", marginRight: "auto" }}>
                    {todo.name}
                  </p>

                  <button
                    onClick={() => notfinish1(index)}
                    style={{
                      backgroundColor: "white ",
                      border: "none",
                      verticalAlign: "middle",
                    }}
                  >
                    <div className="icon1">
                      <BiCaretLeft />
                    </div>
                  </button>
                  <button
                    onClick={() => finish(index)}
                    style={{
                      backgroundColor: "white ",
                      border: "none",
                      verticalAlign: "middle",
                    }}
                  >
                    <div className="icon1">
                      <BiCheck />
                    </div>
                  </button>

                  <button
                    onClick={() => del1(index)}
                    style={{
                      backgroundColor: "white ",
                      border: "none",
                      verticalAlign: "middle",
                    }}
                  >
                    <div className="icon1">
                      <BiX />
                    </div>
                  </button>


                  <button
                    onClick={() =>timerStart(index)}
                    style={{
                      backgroundColor: "white ",
                      border: "none",
                      verticalAlign: "middle",
                    }}
                  >


                  <div className="icon1">
                  <MdPlayCircleOutline />
                    </div>
                   
                    </button>

                    <button
                    onClick={() =>timerStop(index)}
                    style={{
                      backgroundColor: "white ",
                      border: "none",
                      verticalAlign: "middle",
                    }}
                  >


                  <div className="icon1">
                  <MdPause/>
                    </div>
                   
                    </button>

                  <p style={{ color:"blue",marginLeft: "10px", marginRight: "auto" }}>
                   已花費時間：{todo.spenttime} 
                   <br/>
                   總花費時間:  {todo.costtime} 秒 
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              height: "min-content",
              textAlign: "center",
              marginLeft: "1.5vw",
              background: "#ebecf0 ",
              width: "10%",
              padding: "1%",
              verticalAlign: "middle",
              borderRadius: "10px",
            }}
          >
            <p style={{ fontSize: "20px" }}>已完成</p>

            {final[nowWorkspace]?.finish?.map((todo, index) => (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px 10px",
                  
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  padding: "10px 10px",
                }}
              >
                <p style={{ marginLeft: "10px", marginRight: "auto" }}>
                  {todo.name}
                </p>

                <button
                  onClick={() => del2(index)}
                  style={{
                    backgroundColor: "white ",
                    border: "none",
                    verticalAlign: "middle",
                  }}
                >
                  <div className="icon1">
                    <BiX />
                  </div>
                </button>
              </div>
            ))}

            {/* {todos2.map((todo2, index) => (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px 10px",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
           
              <p style={{ marginLeft: "10px", marginRight: "auto" }}>
                {todo2.name}
              </p>

              <button
                onClick={() => del2(index)}
                style={{
                  backgroundColor: "white ",
                  border: "none",
                  verticalAlign: "middle",
                }}
              >
                <div className="icon1">
                  <BiX />
                </div>
              </button>
            </div>
          ))} */}
          </div>
        </div>
        <div style={{ color: "white", fontSize: "100px", display: "flex" }}>
          {/* {(final['myWorkSpace']['notfinish'].name)} */}
        </div>

        {/* 
{final['myWorkSpace'].notfinish.map((todo,index)=>(
        
        <div style={{color:"red",fontSize:"100px"}} >
         
            {todo.name}
          
          </div>



      ))}


 */}

        {/* {list['workspace1']['未完成'].map((lists,index)=>( */}
        {/* <div>

{final['myWorkSpace'].doing.map((finals,index)=>(
        
        <div >

            <p style={{color:"yellow",fontSize:"30px"}}>
          
         
            
            
            </p>  

            
          
          </div>



      ))}
</div> */}
        <div style={{ color: "red", fontSize: "20px" }}>{time}</div>
        <div style={{ color: "red", fontSize: "20px" }}>{addtime}</div>
        <div style={{color:"red"}}>{count}</div>
        <div>
      




        
        </div>
      <button onClick={inc}>Inc</button>
      <button onClick={desc}>Desc</button>
      <button onClick={timerStart}>Start</button>
      <button onClick={timerStop}>Pause</button>
      <button onClick={handleTwoTimes}>2x</button>
      <button onClick={reset}>Reset</button>
        <button onClick={startCountDown}>click</button>
      </div>
      <button onClick={timerStart1}>add</button>
      {timing.map((todo,index)=>{


return(
  <div style={{color:"red",fontSize:"30px"}}>
    {todo.costtime}
  </div>
)


}
)}

      {/* <p>{notDoneCount}未完成／{todos.length  }總數</p>
      <div>
        <input value={input} onChange={todonewInput}/>

        
        <button onClick={add}>新增任務  

        </button>
       
      </div> */}
    </div>
  );
}
export default App;
