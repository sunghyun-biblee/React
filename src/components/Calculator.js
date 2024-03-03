import React, { useState } from "react";
import "./Calculator.css";
import { Calitem } from "./Calitem";

export const Calculator = () => {
  const [prevNum, setPrevNum] = useState();
  const [number, setNumber] = useState(0);
  const [compute, setCompute] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  const handleNum = (i) => {
    const current = i;
    if (result) {
      setCompute("");
      setResult("");
    }
    setNumber(String(number + current));
    setCompute((prev) => prev + current);
  };

  const handleOperat = (i) => {
    const prevcompute = compute[compute.length - 1];
    if (result) {
      setPrevNum(String(result));
      console.log("진입 :" + result);
      setResult(null);
      if (
        prevcompute === "X" ||
        prevcompute === "%" ||
        prevcompute === "/" ||
        prevcompute === "+" ||
        prevcompute === "-"
      ) {
        alert("문자열을 동시에 사용할 수 없습니다");
        return;
      } else {
        setOperator(i);
        setNumber(0);
        setCompute((prev) => prev + i);
        return;
      }
    }

    if (
      prevcompute === "X" ||
      prevcompute === "%" ||
      prevcompute === "/" ||
      prevcompute === "+" ||
      prevcompute === "-"
    ) {
      alert("문자열을 동시에 사용할 수 없습니다");
      return;
    } else {
      setOperator(i);
      setPrevNum(number);
      setNumber(0);
      setCompute((prev) => prev + i);
    }
  };
  const handleResult = () => {
    const firstNum = parseFloat(prevNum);
    const secondNum = parseFloat(number);
    console.log("1: " + firstNum);
    console.log("2: " + secondNum);
    console.log("result: " + (firstNum + secondNum));
    if (firstNum && secondNum) {
      switch (operator) {
        case "X":
          setResult(firstNum * secondNum);
          setCompute(firstNum * secondNum);
          setNumber(0);
          setPrevNum(0);
          break;
        case "%":
          setResult(firstNum % secondNum);
          setCompute(firstNum % secondNum);
          setNumber(0);
          setPrevNum(0);
          break;
        case "/":
          setResult(firstNum / secondNum);
          setCompute(firstNum / secondNum);
          setNumber(0);
          setPrevNum(0);
          break;
        case "+":
          setResult(firstNum + secondNum);
          setCompute(firstNum + secondNum);
          setNumber(0);
          setPrevNum(0);
          break;
        case "-":
          setResult(firstNum - secondNum);
          setCompute(firstNum - secondNum);
          setNumber(0);
          setPrevNum(0);
          break;
        default:
          break;
      }
    }
  };
  const handleReset = () => {
    setPrevNum();
    setNumber(0);
    setCompute("");
    setOperator("");
    setResult(null);
  };
  console.log("첫번 째 :" + prevNum);
  console.log("두번 째 :" + number);
  return (
    <div className="cal_container">
      <div className="resultBox">
        {result ? <p id="result">{result}</p> : <p id="result">{compute}</p>}
      </div>
      <div className="calBox">
        <div className="row one">
          <Calitem
            value={"AC"}
            mode={"gray"}
            onClick={() => {
              handleReset();
            }}
          />
          <Calitem value={"+/-"} mode={"gray"} />
          <Calitem
            value={"%"}
            mode={"gray"}
            onClick={() => handleOperat("%")}
          />
          <Calitem
            value={"/"}
            mode={"orange"}
            onClick={() => handleOperat("/")}
          />
        </div>
        <div className="row two">
          <Calitem value={7} mode={"number"} onClick={() => handleNum(7)} />
          <Calitem value={8} mode={"number"} onClick={() => handleNum(8)} />
          <Calitem value={9} mode={"number"} onClick={() => handleNum(9)} />
          <Calitem
            value={"X"}
            mode={"orange"}
            onClick={() => handleOperat("X")}
          />
        </div>
        <div className="row three">
          <Calitem value={4} mode={"number"} onClick={() => handleNum(4)} />
          <Calitem value={5} mode={"number"} onClick={() => handleNum(5)} />
          <Calitem value={6} mode={"number"} onClick={() => handleNum(6)} />
          <Calitem
            value={"-"}
            mode={"orange"}
            onClick={() => handleOperat("-")}
          />
        </div>
        <div className="row four">
          <Calitem value={1} mode={"number"} onClick={() => handleNum(1)} />
          <Calitem value={2} mode={"number"} onClick={() => handleNum(2)} />
          <Calitem value={3} mode={"number"} onClick={() => handleNum(3)} />
          <Calitem
            value={"+"}
            mode={"orange"}
            onClick={() => handleOperat("+")}
          />
        </div>
        <div className="row five">
          <Calitem value={0} mode={"number"} onClick={() => handleNum(0)} />
          <Calitem value={"."} mode={"number"} onClick={() => handleNum(".")} />
          <Calitem value={"="} mode={"orange"} onClick={() => handleResult()} />
        </div>
      </div>
    </div>
  );
};
