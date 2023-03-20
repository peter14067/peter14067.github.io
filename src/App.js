import logo from "./logo.svg";
import "./App.css";
import Swal from "sweetalert2";
// import SweetAlert  from "react-bootstrap-sweetalert";
import React, { useState, useEffect, useRef } from "react";
import Back from "./back.png";
import Del from "./close.png";
import Add from "./add.png";
import Done from "./check_mark.png";
import Sky from "./sky.jpg";
import { BsClock, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillDiff } from "react-icons/ai";
import { BiCaretLeft, BiCheck, BiX, BiPlus } from "react-icons/bi";
import { FaTrello } from "react-icons/fa";
import {
  MdPlayCircleOutline,
  MdWorkOff,
  MdPause,
  MdOutlineTimer,
  MdOutlineStopCircle,
} from "react-icons/md";

import { Container, Button, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import About from "./About";
import User from "./User";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { prettyDOM } from "@testing-library/react";
import Input from "react-bootstrap-sweetalert/dist/components/Input";

function App(key, initialValue = "") {
  // const [todos,setTodos]=useState([{name:'task1',done:false},{name:'task2',done:false}])
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);

  const initState = {
    // count: 0,
    start: false,
    times: 1,
    change: false,
  };
  const [start1, setStart1] = useState("false");
  // const [count, setCount] = useState(initState.count);
  const [costtime, setCosttime] = useState(0);
  const [showingtime, setShowingtime] = useState("");
  const [nowindex, setInder] = useState(0);
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(false);
  const [maktime, setMakeTime] = useState(0);
  const [timing, setTiming] = useState([
    { name: "task1", done: false, costtime: count },
    { name: "task2", done: false, costtime: count },
  ]);

  const [sec, setSec] = useState("");
  const [minute, setMinute] = useState("");
  const [timing1, setTiming1] = useState(Object.keys(timing));

  const [totaltime, setTotalTime] = useState("");
  const [finalshow, setFinalshow] = useState("");
  const [final, setFinal] = useState({
    myWorkSpace: {
      notfinish: [
        {
          name: "task1",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: 0,
          sho: "none",
        },
        {
          name: "task2",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: 0,
          sho: "none",
        },
        {
          name: "task3",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: 0,
          sho: "none",
        },
      ],
      doing: [
        {
          name: "task4",
          done: false,
          spenttime: 0,
          costtime: 0,
          sho: "none",
          clock1: "",
        },
        {
          name: "task5",
          done: false,
          spenttime: 0,
          costtime: 0,
          sho: "none",
          clock1: "",
        },
        {
          name: "task6",
          done: false,
          spenttime: 0,
          costtime: 0,
          sho: "none",
          clock1: "",
        },
      ],
      finish: [
        { name: "task7", done: false, spenttime: 0, costtime: 0 },
        { name: "task8", done: false, spenttime: 0, costtime: 0 },
        { name: "task9", done: false, spenttime: 0, costtime: 0 },
      ],
    },
    台北行程: {
      notfinish: [
        { name: "完成第二個作品集", done: false },
        { name: "寫一個系統", done: false },
        { name: "面試", done: false },
      ],
      doing: [
        {
          name: "寫程式",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: 0,
          sho: "none",
        },
        {
          name: "跑lalamove",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: 0,
          sho: "none",
        },
        {
          name: "第一個作品",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: 0,
          sho: "none",
        },
      ],
      finish: [
        {
          name: "找一年房子",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: "24:00",
          sho: "none",
        },
        {
          name: "咖啡廳待滿",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: "08:00",
          sho: "none",
        },
        {
          name: "雲端發票應用",
          done: false,
          spenttime: 0,
          costtime: 0,
          costtime1: "10:00",
          sho: "none",
        },
      ],
    },
    trello作品集: {
      notfinish: [
        { name: "時鐘計時器", done: false },
        { name: "css刻板", done: false },
      ],
      doing: [
        {
          name: "css畫精緻",
          done: false,
          spenttime: 0,
          costtime: 0,
          sho: "none",
        },
        {
          name: "trello進階功能",
          done: false,
          spenttime: 0,
          costtime: 0,
          sho: "none",
        },
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

  const [clock1, setClock1] = useState("");
  const [clock2, setClock2] = useState("none");

  const [show, Setshow] = useState("none");

  const [showlist, Setshowlist] = useState("none");

  const [showdis, Setshowdis] = useState("inline-block");
  const [dis1, Setdis1] = useState("block");
  const [col, Setcol] = useState("#ebecf0");

  const [save, setSave] = useState([]);
  const [list, setList] = useState([]);
  const [nowWorkspace, setNowWorkspace] = useState("myWorkSpace");
  const [nowWorkmission, setNowWorkmission] = useState("");
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
  const [time1, setTime1] = useState("");
  const [addtime, setAddTime] = useState(0);
  // 點擊按鈕後開始倒數
  //

  const [numm, setNum] = useState(0);
  const [start, setStart] = useState(initState.start);
  const [times, setTimes] = useState(initState.times);

  const inc = () => setCount(count + 1);
  const desc = () => setCount(count - 1);
  // const timerStart = (index) => setStart(true);
  const timerStart = (index) => {
    if (start == true) {
      // alert("有程序正在執行中");
      Swal.fire("任務已經在執行中");
    } else {
     
      localStorage.setItem("userInfo8", JSON.stringify(index));
      setNum(index);
      // console.log(numm)
    }

    setStart(true);

    // console.log(count)
  };

  const timerStart1 = () => {
    console.log(timing[0].name);
    // const newTodos=[{...timing[0].name,...timing[0].done,costtime:count}]
    const newTodos = [
      { name: timing[0].name, done: false, costtime: count },
      { name: timing[1].name, done: "false", costtime: count },
    ];

    newTodos.count = count;

    const newTodos1 = { ...timing };

    console.log(count);

    // newTodos1[nowWorkspace]["doing"].splice(index, 1);
    // newTodos.push( { name:'task1', done: false },{name:"task2", done: false},{name:  "task3", done: false});
    // setTiming( [{ name:'task4', done: false },{name:"task5", done: false},{name:  "task6", done: false}])

    setTiming(newTodos);
    // setTiming(timing=>([...timing,{name:"456"}]))

    // setTiming(newTodos);
    console.log(timing);
  };

  const timerStop = (index) => {


    



    setStart(false);

    const newTodos3 = { ...final };

    console.log(newTodos3[nowWorkspace]["doing"][index]);


    if(showingtime==0){
      // alert('123')
    }else{
    //  setFinal(newTodos2)

    // setFinal(newTodos1)

    // newTodos1[nowWorkspace]["doing"].push({
    //   name: newTodos2.name,
    //   done: false,
    //   costtime:count
    // });

    // console.log(newTodos1)
    // console.log(count)

    setCosttime(0);
    setCount(0);

    // const a = Math.floor((count+newTodos3[nowWorkspace]['doing'][index].costtime) / 60)
    //   const b =  Math.floor((count+newTodos3[nowWorkspace]['doing'][index].costtime) % 60)

    // setNum(index);
    newTodos3[nowWorkspace]["doing"][index].spenttime = 0;
    newTodos3[nowWorkspace]["doing"][index].costtime =
      count + newTodos3[nowWorkspace]["doing"][index].costtime;

    const totalcount = newTodos3[nowWorkspace]["doing"][index].costtime;

    const c = Math.floor(totalcount / 60);
    const d = Math.floor(totalcount % 60);
    // setMinute(a)
    // setSec(b)

    const newTodos1 = { ...final };
    if (d < 10) {
      newTodos3[nowWorkspace]["doing"][numm].costtime1 = c + ":0" + d;
    }
    if (d >= 10) {
      newTodos3[nowWorkspace]["doing"][numm].costtime1 = c + ":" + d;
    }

    //   setSec(b+'秒')
    //   newTodos3[nowWorkspace]['doing'][index].costtime=b+'秒'
    // }else{
    //   setMinute(a+'分')
    //   setSec(b+'秒')
    //   newTodos3[nowWorkspace]['doing'][index].costtime=0
    // }

    localStorage.setItem("userInfo", JSON.stringify(newTodos3));
    localStorage.setItem(
      "userInfo3",
      JSON.stringify(newTodos1[nowWorkspace]["doing"][index])
    );
    localStorage.setItem("userInfo7", JSON.stringify(""));
    setShowingtime("");
    setClock1(newTodos1[nowWorkspace]["doing"][index]);
    console.log(minute, sec);
    localStorage.setItem("userInfo5", JSON.stringify(0));
    setCount(0);

    setFinal(newTodos3);
    // alert("總花費" + count + "秒");




    let timerInterval
    Swal.fire({
      title: '計時完成!',
      html: '',
      timer: 500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    


  }
  




  };

  const timerStop1 = (index) => {
    setStart(false);
  };

  const handleTwoTimes = () => (times === 2 ? setTimes(1) : setTimes(2));
  const reset = () => {
    setCount(initState.count);
    setStart(initState.start);
    setTimes(initState.times);
  };

  const startCountDown = () => {};

  useEffect(() => {
    if (!change) {
      if (JSON.parse(localStorage.getItem("userInfo2")) != null) {
        setNowWorkspace(JSON.parse(localStorage.getItem("userInfo2")));
      } else {
        setNowWorkspace(nowWorkspace);
      }

      if (JSON.parse(localStorage.getItem("userInfo")) != null) {
        console.log(nowWorkspace);
        // JSON.parse(localStorage.getItem('userInfo'));
        // setIdlist(JSON.parse(localStorage.getItem('userInfo1')))
        setFinal(JSON.parse(localStorage.getItem("userInfo")));
      } else {
        setFinal(final);
        console.log(final);
        // setIdlist(idList)
      }

      if (JSON.parse(localStorage.getItem("userInfo1")) != null) {
        // JSON.parse(localStorage.getItem('userInfo'));
        setIdlist(JSON.parse(localStorage.getItem("userInfo1")));
      } else {
        setIdlist(idList);
      }

      if (JSON.parse(localStorage.getItem("userInfo3")) != null) {
        // JSON.parse(localStorage.getItem('userInfo'));
        setClock1(JSON.parse(localStorage.getItem("userInfo3")));
      } else {
        setClock1("");
      }

      if (JSON.parse(localStorage.getItem("userInfo5")) != 0) {
        setCount(JSON.parse(localStorage.getItem("userInfo5")));
      } else {
        setCount(count);
      }
      console.log(JSON.parse(localStorage.getItem("userInfo6")));
      if (JSON.parse(localStorage.getItem("userInfo6")) != "null") {
        setNowWorkmission(JSON.parse(localStorage.getItem("userInfo6")));
      } else {
        setNowWorkmission(nowWorkmission);
      }

      if (JSON.parse(localStorage.getItem("userInfo7")) != "null") {
        setShowingtime(JSON.parse(localStorage.getItem("userInfo7")));
      } else {
        setShowingtime(showingtime);
      }

      if (JSON.parse(localStorage.getItem("userInfo8")) != "null") {
        setNum(JSON.parse(localStorage.getItem("userInfo8")));
      } else {
        setNum(numm);
      }

      setChange(true);
    }

    // JSON.parse(localStorage.getItem('userInfo'));
    let id = setInterval(() => {
      if (!start) {
        // const newTodos1={...final}
        // console.log(123)
        // console.log(start)
      } else {
        const a = Math.floor((count + 1) / 60);
        const b = Math.floor((count + 1) % 60);

        // console.log(a + ":" + b);
        const newTodos1 = { ...final };
        
        // if (b < 10) {
        //   newTodos1[nowWorkspace]["doing"][numm].spenttime = a + ":0" + b;
        // }
        // if (b >= 10) {
        //   newTodos1[nowWorkspace]["doing"][numm].spenttime = a + ":" + b;
        // }
        let t=0
        if (b < 10) {
          t = a + ":0" + b;
        }
        if (b >= 10) {
         t = a + ":" + b;
        }

        // if (b < 10) {
        //   setShowingtime(a + ":0" + b)
        // }
        // if (b >= 10) {
        //   showingtime = a + ":" + b;
        // }


       
        console.log(showingtime)
        setCount((count) => count + 1);

        localStorage.setItem("userInfo5", JSON.stringify(count + 1));

        setFinal(final);
        
        console.log(t);
       
        localStorage.setItem("userInfo", JSON.stringify(final));

        setShowingtime(t);
        setCosttime(count);
        localStorage.setItem(
          "userInfo7",
          JSON.stringify(t)
        );
      }

      // setCount(count=>count+1);

      // setCosttime(count);

      // setMakeTime(count+1)
      const newTodos1 = { ...final };
      const finalshow = "";
      // newTodos1[nowWorkspace]['doing'][index].spenttime=count+1

      // console.log('userInfo', JSON.stringify(final))

      // localStorage.setItem('userInfo', JSON.stringify(final));

      // setFinalshow(final)

      // }, 1000 / times);
    }, 1000);
    return () => clearInterval(id);
  }, [
    final,
    start,
    count,
    idList,
    nowWorkspace,
    minute,
    sec,
    clock1,
    nowWorkmission,
    showingtime,
    numm
  ]);
  // useEffect(
  //   () => {

  //     let id = setInterval(() => {
  //    JSON.parse(localStorage.getItem('userInfo'));

  //     }, 1000 / times);
  //     return () => clearInterval(id);

  //   },

  // );

  const addlist = () => {
    Setshowlist("inline-block");
    Setshowdis("none");

    console.log(final["myWorkSpace"]["notfinish"]);
  };

  const addlist1 = () => {
    Setshowdis("inline-block");
    Setshowdis("none");
    console.log(idList) 

   console.log(idList.indexOf(input1))
    if (input1 != "") {
      const newTodos1 = { ...final };
      const newTodos2 = { ...final[nowWorkspace]["notfinish"][index] };
      const i = 0;
   
      // console.log(idList.indexOf(input1));
      if (idList.indexOf(input1) != -1) {
        
        // alert("檔案已存在，請換一個檔名");
        Swal.fire("檔案已存在，請換一個檔名");
      } else {
        // newTodos1[nowWorkspace]["notfinish"].push({ name: input, done: false });
        newTodos1[input1] = { notfinish: [], doing: [], finish: [] };
        console.log(newTodos1);
        localStorage.setItem("userInfo", JSON.stringify(newTodos1));
        setFinal(newTodos1);
        localStorage.setItem(
          "userInfo1",
          JSON.stringify(Object.keys(newTodos1))
        );
        setIdlist(Object.keys(newTodos1));

        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "看板:" + input1 + "已成功建立",
          showConfirmButton: false,
          timer: 1500,
        });
        setInput1("");
      }
      // save.push({ name: input, done: false });

      // setList(save);
      // setNowWorkspace(save)

      // window.localStorage.setItem("words",JSON.stringify(newWords) );
    }
  };

  const delmenu = (index) => {
    if (clock1 == "") {
      Swal.fire({
        title: "確定要刪除嗎",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("刪除成功!", "", "success");

          const newTodos1 = { ...final };
          console.log(newTodos1);
          console.log(nowWorkspace);
          const newTodos2 = Object.keys(newTodos1);
          console.log(newTodos2[index]);

          // if(clock1=='')  {

          if (nowWorkspace == newTodos2[index]) {
            Swal.fire({
              icon: "error",
              title: "你正在看板裡面，無法刪除...",
              text: "請先切到其他看板",
              // footer: '<a href="">Why do I have this issue?</a>'
            });
          } else {
            console.log(newTodos2[index]);

            const newTodos3 = newTodos2[index];
            delete newTodos1[[newTodos3]];

            console.log(newTodos1);

            // setFinal(newTodos1);
            localStorage.setItem(
              "userInfo1",
              JSON.stringify(Object.keys(newTodos1))
            );

            setIdlist(Object.keys(newTodos1));
            // setIdlist(Object.keys(newTodos1));

            localStorage.setItem("userInfo", JSON.stringify(newTodos1));
            setFinal(newTodos1);
          }
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "請先結束執行中任務!",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  const clear = (index) => {
    const lis = [...idList];
    // console.log(final);
    // console.log(lis[index]);
    console.log(final[nowWorkspace]['doing'])
    localStorage.setItem("userInfo2", JSON.stringify(lis[index]));
    setNowWorkspace(lis[index]);
    
     
    // { notfinish: [], doing: [], finish: [] };


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
      newTodos1[nowWorkspace]["notfinish"].push({
        name: input,
        done: false,
        spenttime: 0,
        costtime: 0,
      });
      localStorage.setItem("userInfo", JSON.stringify(newTodos1));

      setFinal(newTodos1);

      setInput("");
    }
  };

  const counting = (index) => {
    const newTodos1 = { ...final };

    if (clock1 == "") {
      setNowWorkmission(
        nowWorkspace + "/" + newTodos1[nowWorkspace]["doing"][index].name
      );
      localStorage.setItem(
        "userInfo6",
        JSON.stringify(
          nowWorkspace + "/" + newTodos1[nowWorkspace]["doing"][index].name
        )
      );

      // setNowWorkmission('('+nowWorkspace+')'+'('+newTodos1[nowWorkspace]["doing"][index].name+')')
      // localStorage.setItem("userInfo6", JSON.stringify('('+nowWorkspace+')'+'('+newTodos1[nowWorkspace]["doing"][index].name+')'));
      //   if(newTodos1[nowWorkspace]['doing'][index].done==true ){
      //     console.log(newTodos1[nowWorkspace]['doing'][index])
      //     newTodos1[nowWorkspace]['doing'][index].done=false
      //     newTodos1[nowWorkspace]['doing'][index].sho='block'
      //  setClock1('false')

      //  setFinal(newTodos1)
      //  localStorage.setItem('userInfo', JSON.stringify(newTodos1));
      //   }else{
      //     alert("請先結束這個專案")
      //      setClock1( newTodos1[nowWorkspace]['doing'][index])
      //     console.log(newTodos1[nowWorkspace]['doing'])
      //     newTodos1[nowWorkspace]['doing'][index].done=true
      //     newTodos1[nowWorkspace]['doing'][index].sho='block'
      //     localStorage.setItem('userInfo', JSON.stringify(newTodos1));
      //     setFinal(newTodos1)
      //     console.log(clock1)
      //    setClock1( newTodos1[nowWorkspace]['doing'][index])
      //   }

      newTodos1[nowWorkspace]["doing"][index].done = false;
      newTodos1[nowWorkspace]["doing"][index].sho = "block";

      setFinal(newTodos1);

      localStorage.setItem("userInfo", JSON.stringify(newTodos1));
      localStorage.setItem(
        "userInfo3",
        JSON.stringify(newTodos1[nowWorkspace]["doing"][index])
      );
      setClock1(newTodos1[nowWorkspace]["doing"][index]);
    } else if (
      JSON.stringify(clock1) ==
      JSON.stringify(newTodos1[nowWorkspace]["doing"][index])
    ) {
      if (!start) {
        newTodos1[nowWorkspace]["doing"][index].done = true;
        newTodos1[nowWorkspace]["doing"][index].sho = "none";
        newTodos1[nowWorkspace]["doing"][index].spentime = 0;

        newTodos1[nowWorkspace]["doing"][index].counttime = 0;
        localStorage.setItem("userInfo3", JSON.stringify(""));
        // setClock1( newTodos1[nowWorkspace]['doing'][index])

        // setNowWorkmission('')
        setNowWorkmission("");
        localStorage.setItem("userInfo6", null);
        setFinal(newTodos1);
        localStorage.setItem("userInfo", JSON.stringify(newTodos1));
        localStorage.setItem("userInfo7", JSON.stringify(""));
        setShowingtime("");

        console.log(newTodos1[nowWorkspace]["doing"][index].name);
        console.log(clock1);
        setClock1("");
      } else {

        Swal.fire({
          icon: "任務還在執行，請先結束任務",
          title: "Oops...",
          text: "請先結束執行中任務!",
          // footer: '<a href="">Why do I have this issue?</a>',
        });
        // alert("任務還在執行，請先結束任務");
      }

      // alert("嗨你好")
    } else {
      console.log(clock1);
      console.log(newTodos1[nowWorkspace]["doing"][index]);
      // alert("請先結束執行中的任務");
      Swal.fire({
        icon: "請先結束執行中的任務",
        title: "還有任務在執行...",
        text: "請先結束執行中任務!",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
    }

    // console.log(index)
    //  console.log(newTodos1[nowWorkspace]['doing'][index].done  )

    //  newTodos1[nowWorkspace]['doing'][index].done=true

    // customClass: {
    //   confirmButton: <MdOutlineTimer/>,
    //   cancelButton: 'btn btn-danger'
    // },
    // buttonsStyling: false, // 是否使用sweetalert按鈕樣式（預設為true）

    // Swal.fire({
    //   title: 'Do you want to save the changes?',
    //   showDenyButton: true,
    //   showCancelButton: true,
    //   showCloseButton:true,
    //   confirmButtonText: 'Save' ,
    //   denyButtonText: `Don't save`,

    // }).then((result) => {

    //   if (result.isConfirmed) {
    //     Swal.fire('Saved!', '', 'success')
    //   } else if (result.isDenied) {
    //     Swal.fire('Changes are not saved', '', 'info')
    //   }
    // })

    /* Read more about isConfirmed, isDenied below */
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
    localStorage.setItem("userInfo", JSON.stringify(newTodos1));
    setFinal(newTodos1);
  };

  const del1 = (index) => {
    const newTodos1 = { ...final };
    if (
      JSON.stringify(clock1) !=
      JSON.stringify(newTodos1[nowWorkspace]["doing"][index])
    ) {
      const newTodos = [...todos];

      const newTodos1 = { ...final };

      newTodos1[nowWorkspace]["doing"].splice(index, 1);
      localStorage.setItem("userInfo", JSON.stringify(newTodos1));
      setFinal(newTodos1);

      setClock1("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "請先完成任務",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
      // alert("還有專案案正在執行");
    }
  };

  const del2 = (index) => {
    const newTodos = [...todos];

    const newTodos1 = { ...final };

    newTodos1[nowWorkspace]["finish"].splice(index, 1);

    localStorage.setItem("userInfo", JSON.stringify(newTodos1));
    setFinal(newTodos1);
  };

  const finish = (index) => {
    const newTodos1 = { ...final };
    if (
      JSON.stringify(clock1) !=
      JSON.stringify(newTodos1[nowWorkspace]["doing"][index])
    ) {
      const newTodos1 = { ...final };
      const newTodos2 = { ...final[nowWorkspace]["doing"][index] };

      newTodos1[nowWorkspace]["finish"].push({
        name: newTodos2.name,
        done: false,
        spenttime: newTodos2.spenttime,
        costtime: newTodos2.costtime,
        costtime1: newTodos2.costtime1,
      });

      newTodos1[nowWorkspace]["doing"].splice(index, 1);

      // newTodos1[nowWorkspace]['finish'][index].costtime=newTodos1[nowWorkspace]["doing"][index].costtime
      console.log(newTodos1);
      localStorage.setItem("userInfo", JSON.stringify(newTodos1));

      setFinal(newTodos1);
      console.log(newTodos1);
      // setCount(0);
      localStorage.setItem("userInfo5", JSON.stringify(count));
      // setStart1(true);

      // console.log(index)
      // console.log(final)
      // localStorage.setItem("userInfo3", JSON.stringify(""));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "請先完成任務",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
      // alert("還有專案在執行");
    }

    // setClock1("");
  };

  const notfinish1 = (index) => {
    console.log(clock1);
    const newTodos1 = { ...final };
    if (
      JSON.stringify(clock1) !=
      JSON.stringify(newTodos1[nowWorkspace]["doing"][index])
    ) {
      const newTodos1 = { ...final };
      const newTodos2 = { ...final[nowWorkspace]["doing"][index] };
      // console.log(newTodos2);
      // console.log(newTodos1);
      // console.log(newTodos1[nowWorkspace]["notfinish"]);
      newTodos1[nowWorkspace]["notfinish"].push({
        name: newTodos2.name,
        done: false,
      });

      // console.log(newTodos1);
      newTodos1[nowWorkspace]["doing"].splice(index, 1);
      localStorage.setItem("userInfo", JSON.stringify(newTodos1));
      setFinal(newTodos1);

      // setClock1("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "請先完成任務",
        // footer: '<a href="">Why do I have this issue?</a>',
      });
      
      // alert("請先結束專案");
    }
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
    // console.log(newTodos2);
    // console.log(newTodos1);
    // console.log(newTodos1[nowWorkspace]["doing"]);
    newTodos1[nowWorkspace]["doing"].push({
      name: newTodos2.name,
      done: false,
      spenttime: 0,
      costtime: 0,
      costtime1: 0,
      sho: "none",
    });

    // console.log(newTodos1);
    newTodos1[nowWorkspace]["notfinish"].splice(index, 1);
    console.log(newTodos1);
    localStorage.setItem("userInfo", JSON.stringify(newTodos1));
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

  return (
    // <div className="App" style={{ display: "flex" }}>
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          padding: "29px",
          display: "flex",

          height: "100vh",
          borderRight: "1px solid rgb(244,247,246)",
          float: "left",
          backgroundColor: " rgb(251,251,255)",
          // backgroundColor:"rgb(235, 236, 240)"
          // backgroundColor: "black",
        }}
      >
        {/* <MyName style={{color:"white",backgroundColor:"blue"}} name={name}/> */}

        <div style={{ width: "300px", backgroundColor: " rgb(251,251,255)" }}>
          {/* <button
            onClick={addlist}
            style={{ backgroundColor: "red", color: "white", display: showdis }}
          >
            新增看板
          </button> */}
          {/* <div style={{ display: "flex", padding: "32px 19px 11px 23px" }}> */}
          <div style={{ display: "flex",height:"20vh",padding:"20px 1px 1px 16px"}}>
            <FaTrello style={{ height: "4vh", width: "3vw" }} />

            <p
              className="pppx"
              style={{
                verticalAlign: "baseline",
                marginLeft: "0",
                fontFamily: "!important",
                height: "10vh",
                // color: "wheat",
              }}
            >
              工作空間
            </p>

             
          </div>
          
          {/* <div style={{backgroundColor:"rgb(249,238,253)",display:"flex"}}>
              <p style={{margin:"auto",verticalAlign:"middle"}}>
              新增看板



              </p>



          <button
              onClick={addlist}
              style={{
                backgroundColor:"rgb(249,238,253)",
                border: "white",
                // color: "white",
                display: showdis,
              }}
            >
              <BiPlus style={{ fontSize: "2em" }} />
            </button>

              <div>

          </div>

            </div> */}
          <div
            style={{
              backgroundColor: "rgb(249,238,253)",
              display: "flex",
              padding: "13px 21px 10px 17px",
              borderRadius: "14px",
            }}
          >
            <input
              style={{
                // display: showlist,
                height: "20px",
                backgroundColor: "rgb(237,243,250)",
                color:"rgb(129,138,151)",
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
                // backgroundColor: "white",
                color: "white",
                border: "none",
                // backgroundColor:"rgb(249,238,253)",
                marginLeft: "auto",
                backgroundColor: "rgb(170,179,185)",
                borderRadius: "50%",
                // display: showlist,
              }}
            >
              <BiPlus />
            </button>
          </div>

          <div style={{ display: "flex", marginTop: "10vh" }}>
            <p
              style={{
                marginLeft: "15px",
                // color: "white",
                width: "300%",
                fontSize: "25px",
              }}
            >
              您的看板
            </p>
          </div>

          {idList.map((todo, index) => (
            //  {final[0]?.map((todo, index) => (
            <div style={{ color: "black" }}>


        <div style={{marginLeft:"2vw"}}>
              <button
                onClick={() => clear(index)}
                style={{
                  border: "none",
                  // backgroundColor: "white",
                  backgroundColor: "rgb(251,251,255)",
                  color: "black",
                 
                  
                }}
              >
              
                <p
                  className="tttx"
                  style={{
                    color: "black",
                    backgroundColor: " rgb(251,251,255)",
                  }}
                >
                  {todo}
                </p>
                {/* {JSON.stringify(todo)} */}
              </button>

              <button
                onClick={() => delmenu(index)}
                style={{
                  border: "none",
                  // backgroundColor: "white",

                  color: "black",
                  marginLeft: "10px",
                  marginRight: "auto",
                }}
              >
                <BiX />
                {/* {JSON.stringify(todo)} */}
              </button>
              </div>
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
        <div
          style={{ backgroundColor: "rgb(244,249,253)", padding: "50px 21px 20px 59px",borderBottom:"2 solid black",height:"24vh" }}
        >
          <p
            className="pppx"
            style={{
              marginLeft: "0",
              fontSize: "1.5em",
              display:"contents",
              marginRight: "80vw",
              // backgroundColor: "rgb(0,24,24)",
            }}
          >
            目前看板：{nowWorkspace}
          </p>

          <div style={{ display: "flex",marginTop:"14px"}}>
            <div>
            <p
              className="tttx"
              style={{
                fontSize: "1em",
                color: "black",
                fontFamily: "lora",

                // backgroundColor: "rgb(0,24,24)",
              }}
            >
              執行中任務：{nowWorkmission}
            </p>
            </div>
            <p
              className="tttx"
              style={{
                fontSize: "1em",
                color: "black",
                fontFamily: "lora",

                // backgroundColor: "rgb(0,24,24)",
              }}
            >
              {showingtime}
            </p>
        
        </div>
        </div>

        <div
          style={{
            padding: "26px 51px 55px 50px",
            height: "min-height",
            textAlign: "center",
            display: "flex",
            width: "100%",
            // marginLeft: "5px",
            height: "min-content",
            justifyContent: "left",
            overflow: "auto",
            height: "100vh",
            backgroundColor: "rgb(245,248,250)",
            // backgroundColor:"rgb(235, 236, 240)"
          }}
        >
          <div
            style={{
              padding: "20px 20px 32px 20px",
              height: "min-content",
              display: "flex",
              marginLeft: "4px",
              display: "flex",
              display: "inline-block",

              width: "23%",
              borderRadius: "10px",
              verticalAlign: "middle",
              // backgroundColor:"rgb(235, 236, 240)"
              backgroundColor: "rgb( 238,243,251   )",
            }}
          >
            {BsFillArrowLeftCircleFill}
            <p
              style={{ fontSize: "20px", textAlign: "center", color: "black" }}
            >
              待辦清單
            </p>

            <div style={{ width: "auto", textAlign: "center" }}>
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
                // backgroundColor: col,
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
                  placeholder="為這個任務輸入標題..."
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
              新增任務
            </button>
            {/* <button onClick={add} style={{border:"none",verticalAlign:"middle"}}><img src={Add} style={{width:"40%",border:"none",verticalAlign:"middle",border:"none",display:show}} /></button> */}

            <div
              style={{
                display: "flex",
                marginBottom: "0",
                backgroundColor: "rgb(238,243,251)",
              }}
            >
              {/* <p style={{ display: dis1, color: "#979EAF" }}>新增卡片</p> */}
              <button
                onClick={showout}
                style={{
                  border: "none",
                  background: "rgb(238,243,251)",
                  verticalAlign: "middle",
                  display: dis1,
                }}
              >
                <div style={{ display: "flex", color: "rgb(122,134,146)" }}>
                  {/*         
                  <BiPlus /> */}
                  新增任務
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
              width: "28%",
              padding: "1%",
              verticalAlign: "middle",
              borderRadius: "10px",
              textAlign: "center",
              backgroundColor: "rgb( 238,243,251   )",
              marginLeft: "3vw",
            }}
          >
            <p style={{ fontSize: "20px", textAlign: "center" }}>
            進行中
              {/* 進行中 {count} */}
            </p>

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
                    onClick={() => counting(index)}
                    style={{
                      backgroundColor: "white ",
                      border: "none",
                      verticalAlign: "middle",
                    }}
                  >
                    <div className="icon1">
                      <MdOutlineTimer />
                    </div>
                  </button>

                  <div
                    style={{
                      // border: "2px outset",
                      display: final[nowWorkspace]["doing"][index].sho,
                      // backgroundColor: "rgb(217,209,196)",
                    }}
                  >
                    <div
                      style={{
                        height: "10vh",
                        // backgroundColor: "rgb(217,209,196)",
                        width: "10vw",
                        margin: "auto",
                        padding: "10px",
                        border: "2px ",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "3em",
                          color: "rgb(34,82,86)",
                          fontFamily: "georgia",
                        }}
                      >
                        {/* {todo.spenttime} */}
                        {showingtime}
                      </p>
                      {showingtime}
                    </div>

                    <button
                      onClick={() => timerStart(index)}
                      style={{
                        // backgroundColor: "rgb(217,209,196)",
                        backgroundColor: "white",
                        border: "none",
                        verticalAlign: "middle",
                      }}
                    >
                      <div className="icon2">
                        <MdPlayCircleOutline />
                      </div>
                    </button>

                    <button
                      onClick={() => timerStop1(index)}
                      style={{
                        // backgroundColor: "rgb(217,209,196)",
                        backgroundColor: "white",
                        border: "none",
                        verticalAlign: "middle",
                      }}
                    >
                      <div className="icon2">
                        <MdPause />
                      </div>
                    </button>

                    <button
                      onClick={() => timerStop(index)}
                      style={{
                        // backgroundColor: "rgb(217,209,196)",
                        backgroundColor: "white",
                        border: "none",
                        verticalAlign: "middle",
                      }}
                    >
                      <div className="icon2">
                        <MdOutlineStopCircle />
                      </div>
                    </button>
                    {/* 
                    <div>
                    總花費時間:  {minute}{sec}
                    </div> */}
                  </div>
                  {/* <p>總花費時間: {todo.costtime}</p> */}
                  <p>總花費時間: {todo.costtime1}</p>
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
              width: "23%",
              padding: "1%",
              verticalAlign: "middle",
              borderRadius: "10px",
              backgroundColor: "rgb( 238,243,251   )",

              marginLeft: "3vw",
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
                <p
                  style={{
                    textDecoration: "line-through",
                    marginLeft: "10px",
                    marginRight: "auto",
                  }}
                >
                  {todo.name}
                  <br />
                  {/* <p style={{ color: "blue", marginRight: "auto" }}>
                    總花費時間: {todo.costtime} 
                  </p> */}
                  <p style={{ marginRight: "auto" }}>
                    總花費時間: {todo.costtime1}
                  </p>
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
      </div>

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
