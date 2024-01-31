import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navi = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!values.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Email address is invalid";

    if (!values.password) newErrors.password = "Password is required";
    else if (values.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Successful registration");
      navi("/e-commerce-web-app/");
    }
  };
  return (
    <div className="login">
      <div className="container">
        <div className="min-vh-100">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3>Login Now</h3>

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
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
