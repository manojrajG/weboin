import React, { useContext } from "react";
import DataContext from "../Context Api/DataContext";

function StudentList(props) {
  const { updateCount } = props;
  const { studentList, setStudentList } = useContext(DataContext);

  const handleDelete = (stu) => {
    let newList = studentList.filter((s, index) => index !== stu);
    setStudentList(newList);
    localStorage.setItem("stuDataList", JSON.stringify(newList));
    updateCount();
  };

  return (
    <section className="StudentList">
      {studentList.map((stu, index) => {
        return (
          <div className="stuDetails" key={index}>
            <div className="stuName" style={{ display: "flex" }}>
              <span>{stu.name[0]}</span>
              <h3>{stu.name}</h3>
            </div>
            <div>
              <p>
                <strong>Role: </strong>
                {stu.role}
              </p>
              <p>
                <strong>Email: </strong>
                {stu.email}
              </p>
              <p>
                <strong>Phone Number: </strong>
                {stu.phNo}
              </p>
              <p>
                <strong>Course: </strong>
                {stu.course}
              </p>

              <p>
                <strong>Status: </strong>
                {stu.curStatus}
              </p>
            </div>
            <button
              className="StuListDelBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default StudentList;
