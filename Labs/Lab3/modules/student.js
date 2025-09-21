let student = {
    name: "Avano",
    id: 1
}

function getStudent() {
    return student;
}

exports.getStudent = () => {
    student.push(student);
    return student;
}


module.exports.getStudent = getStudent;