import axios from "axios";
import {useState, useEffect} from "react";
import "./List.css";

export default function PersonList() {
    const [persons, setPersons] = useState([]);

    const fetchPersons = () => {
        axios
            .get(`https://randomuser.me/api/?results=10&exc=nat`)
            .then((response) => {
                setPersons(response.data.results);
            })
            .catch((error) => {
                console.error("an error happened when fetching the person!", error);
            });
    };

    useEffect(fetchPersons, []);

    return (
        <div className="container">
            <h2 className="title">User List</h2>

            {persons.map((person, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        {`${person.name.title} ${person.name.first} ${person.name.last}`}
                    </div>

                    <div className="card-content">
                        <div className="card-image">
                            <img src={person.picture.large} alt="User"/>
                        </div>

                        <div className="card-details">
                            <p>Username: <b>{person.login.username}</b></p>
                            <p>Gender: {person.gender}</p>
                            <p>Time Zone Description: {person.location.timezone.description}</p>
                            <p>Address: {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</p>
                            <p>Email: {person.email}</p>
                            <p>Birth Date and Age: {person.dob.date} ({person.dob.age})</p>
                            <p>Register Date: {person.registered.date}</p>
                            <p>Phone: {person.phone}</p>
                            <p>Cell: {person.cell}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}