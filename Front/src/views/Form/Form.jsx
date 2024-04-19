import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });
    

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const property = event.target.name;
	    const value = event.target.value;

      setErrors(validation({...userData, [property]:value}));
      setUserData({...userData, [property]:value});
     };

     const handleSubmit = (e) => {
      e.preventDefault();
      login(userData);
     };

  return (
    <form className={style.container} onSubmit={handleSubmit}>

      <div className={style.user}>
        <label htmlFor="email" className={style.text}>User:</label>
        <input className={style.input} onChange={handleChange} type="text" name="email"value={userData.email} required />
        {errors.email ? <p className={style.error}>{errors.email}</p> : null}
      </div>

      <div className={style.pass}>
        <label htmlFor="password" className={style.text}>Password:</label>
        <input className={style.input} onChange={handleChange} type="password" name="password" value={userData.password} required/>
        {errors.password ? <p className={style.error}>{errors.password}</p> : null}
      </div>
      
      <button type="submit" className={style.button}>Submit</button>
    </form>
  );
};

export default Form;
