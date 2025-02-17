import NatClassComp from "./components/NatClassComp";
import NatFuncComp from "./components/NatFuncComp";
import NatJsxExpression from "./components/NatJsxExpression";


function NatApp() {
  return (
    <div className="container border mt-3 bg-white">
       <h1 >React JS Lesson03 - Nguyễn Anh Tuấn</h1>
       <NatJsxExpression />
       <hr/>
       <NatFuncComp />
       <hr/>
       <NatClassComp />
    </div>
  );
}

export default NatApp;
