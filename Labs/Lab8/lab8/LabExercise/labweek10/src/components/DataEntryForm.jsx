import React, {useState} from 'react';

const DataEntryForm = () => {
    const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
        'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut',
        'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        province: '',
        city: '',
        postalCode: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const validateForm = () => {
        let formErrors = {};
        if (!formData.name.trim()) formErrors.name = 'Name is required';
        if (!formData.email.trim()) formErrors.email = 'Email is required';
        if (!formData.address.trim()) formErrors.address = 'Address is required';
        if (!formData.province.trim()) formErrors.province = 'province is required';
        if (!formData.city.trim()) formErrors.city = 'City is required';
        if (!formData.postalCode.trim()) formErrors.postalCode = 'Postal code is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Data:', formData);
            setSubmitted(true);
            // handle form submission logic here
        }
    };
    return (
        <div>
            {submitted ? (
                <div>
                    <div>
                        <div>
                            <h2>Email: {formData.email}</h2>
                            <h2>Full Name: {formData.name}</h2>
                            <h2>Address: {formData.address}</h2>
                            <h2>City: {formData.city}</h2>
                            <h2>Province: {formData.province}</h2>
                            <h2>Postal Code: {formData.postalCode}</h2>
                        </div>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Data Entry Form</h2>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter you name"
                        />
                        {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                    </div>
                    <div>
                        <label>Address:</label>
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Enter Address"
                        />
                        {errors.address && <span style={{color: 'red'}}>{errors.address}</span>}
                    </div>
                    <div>
                        <label>province:</label>
                        <select name="province" value={formData.province} onChange={handleChange}>
                            <option value="">Select</option>
                            {
                                provinces.map(province => (
                                    <option key={province} value={province}>{province}</option>
                                ))
                            }
                        </select>
                        {errors.province && <span style={{color: 'red'}}>{errors.province}</span>}
                    </div>
                    <div>
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter city"
                        />
                        {errors.city && <span style={{color: 'red'}}>{errors.city}</span>}
                    </div>
                    <div>
                        <label>Postal Code:</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="Enter Postal code"
                        />
                        {errors.postalCode && <span style={{color: 'red'}}>{errors.postalCode}</span>}
                    </div>
                    <button type="submit">Signup</button>
                </form>
            )}
        </div>
    );
};
export default DataEntryForm;