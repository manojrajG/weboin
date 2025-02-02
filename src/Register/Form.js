import React, { useContext } from "react";
import DataContext from "../Context Api/DataContext";

function Form(props) {
  const { updateCount } = props;
  const { studentList, setStudentList, studentDetails, setStudentDetails } =
    useContext(DataContext);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setStudentDetails((curDetails) => {
      return { ...curDetails, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentList((curList) => {
      return [...curList, studentDetails];
    });
    localStorage.setItem(
      "stuDataList",
      JSON.stringify([...studentList, studentDetails])
    );
    setStudentDetails({
      name: "",
      role: "",
      email: "",
      phoneNumber: "",
      course: "",
      curstatus: "",
    });

    updateCount();
  };

  return (
    <form action="">
      <h1>Fill This Form</h1>
      <div className="formBox">
        <div className="inputBox">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={studentDetails.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputBox">
          <label>Role:</label>
          <input
            type="text"
            name="role"
            placeholder="Enter your role"
            value={studentDetails.role}
            onChange={handleChange}
          />
        </div>
        <div className="inputBox">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={studentDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputBox">
          <label>Phone Number:</label>

          <input
            type="text"
            name="phNo"
            placeholder="Enter your phone number"
            value={studentDetails.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="inputBox">
          <label>course:</label>
          <select name="course" id="course" onChange={handleChange}>
            <option value="Select a Course">Select a Course</option>
            <option value="React Basics">React Basics</option>
            <option value="Ui/Ux Design">UI/Ux Design</option>
            <option value="JavaScript Fundamentals">
              JavaScript Fundamentals
            </option>
            <option value="Advanced CSS">Advanced CSS</option>
            <option value="Backend Development">Backend Development</option>
          </select>
        </div>
        <div className="inputBox ">
          <label>Status:</label>
          <select name="curStatus" id="curStatus" onChange={handleChange}>
            <option value="Unplaced">Unplaced</option>
            <option value="Placed">Placed</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <button type="submit" className="submitBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
