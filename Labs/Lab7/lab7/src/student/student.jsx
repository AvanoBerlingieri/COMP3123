function Student(props) {
    const student = props.student;
    return(
        <div>
            <h5>{JSON.stringify(props)}</h5>
            <h1>Student details</h1>
            <h4>Student First Name: {props.student.fName}</h4>
            <h4>Student Last Name: </h4>
            <h4>Student Email: </h4>
            <h4>Student City: </h4>
        </div>
    )
}

export default Student;