import { useState, useEffect } from "react"

const EmployeeListPage = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch('http://localhost:5000/api/employees')
            const data = await response.json()
            setEmployees(data)
        }

        fetchEmployees()
    }, [])

const handleEdit = async (id) => {
    window.location.href = `/edit/${id}`
}

const handleDelete = async (id) => {
    try{
        await fetch(`http://localhost:5000/api/employees/${id}`, {
            method: 'DELETE',
        })
        setEmployees(employees.filter(emp => emp.f_Id !== id))
    } catch(error){
        alert('Error deleting employee')
    }

} 

    return (
        <div>
            <h1>Employee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Unique Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <tbody>
          {employees.map(emp => (
            <tr key={emp.f_Id}>
              <td>{emp.f_Id}</td>
              <td><img src={emp.f_Image} alt={emp.f_Name} /></td>
              <td>{emp.f_Name}</td>
              <td>{emp.f_Email}</td>
              <td>{emp.f_Mobile}</td>
              <td>{emp.f_Designation}</td>
              <td>{emp.f_gender}</td>
              <td>{emp.f_Course}</td>
              <td>{emp.f_Createdate}</td>
              <td>
                <button onClick = {() => handleEdit(emp.f_Id)}>Edit</button>
                <button onClick={() => handleDelete(emp.f_Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
                </tbody>
            </table>
        </div>
    )

}

export default EmployeeListPage