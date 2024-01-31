import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navi = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.name) newErrors.name = "Name is required";
    if (!values.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Email address is invalid";

    if (!values.password) newErrors.password = "Password is required";
    else if (values.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!values.conpassword)
      newErrors.conpassword = "Confirm password is required";
    else if (values.conpassword !== values.password)
      newErrors.conpassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Successful registration");
      navi("/login");
    }
  };

  return (
    <div className="swiper-wrapper">
      <div className="container">
        <div className="min-vh-100">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h3>Register Now</h3>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={values.name}
            ></input>
            {errors.name && values.name.length < 2 && (
              <p className="error">{errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={values.email}
            ></input>
            {errors.email && values.email.length < 5 && (
              <p className="error">{errors.email}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={handleChange}
              value={values.password}
            ></input>
            {errors.password && values.password.length < 8 && (
              <p className="error">{errors.password}</p>
            )}
            <input
              type="password"
              name="conpassword"
              placeholder="Confirm Your Password"
              onChange={handleChange}
              value={values.conpassword}
            ></input>
            {errors.conpassword &&
              values.conpassword.length < 8 &&
              errors.conpassword !== errors.password && (
                <p className="error">{errors.conpassword}</p>
              )}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
