function StudentList (){
    const students = ["Rahul","Sahul","Mahul"]
    return (
        <ul>
        {students.map((s,index)=>(
            <li key={index}>{s}</li>
        ))}
        </ul>
    )
}