import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [studentList, setStudentList] = useState([]);
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    role: "",
    email: "",
    phNo: "",
    course: "",
    curStatus: "",
  });
  const [counts, setCounts] = useState({
    totalStudents: 0,
    placedStudents: 0,
    unplacedStudents: 0,
    
  });
  return (
    <DataContext.Provider
      value={{
        studentList,
        setStudentList,
        studentDetails,
        setStudentDetails,
        counts,
        setCounts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
