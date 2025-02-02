import React, { useContext } from "react";
import "./FormPage.css";
import Form from "./Form";
import StudentList from "./StudentList";
import DataContext from "../Context Api/DataContext";

function FormPage() {
  const { setCounts } = useContext(DataContext);

  const updateCount = () => {
    let newData = localStorage.getItem("stuDataList");
    let stuList = JSON.parse(newData);
    
    let pS = stuList.filter((stu) => stu.curStatus === "Placed");
    let uS = stuList.filter((stu) => stu.curStatus === "Unplaced");

    let tempCounts = {
      totalStudents: stuList.length,
      placedStudents: pS.length,
      unplacedStudents: uS.length,
    };

    setCounts(tempCounts);
  };

  return (
    <div className="formPage">
      <Form updateCount={updateCount} />
      <StudentList updateCount={updateCount} />
    </div>
  );
}

export default FormPage;
