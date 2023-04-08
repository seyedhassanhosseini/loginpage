import React, {useState, useEffect} from 'react'
import {validate} from "./validate";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast';
import  styles from "./login.module.scss";


const SignIn = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    isAccepted: false
  });

  const [errors, setErrors] = useState({});
  const [touch, setTouch] = useState({});



  useEffect(() => {
    setErrors(validate(data))
  },[data, touch]);

  console.log(errors);

  const handler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({...data,[event.target.name] : event.target.checked})
    } else {
      setData({...data,[event.target.name] : event.target.value})
    }
  };

  const focusHandler = event => {
    setTouch({...touch,[event.target.name] : true})
  };

  const submitHandler = event => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
        notify("you signed in sussesfully", "success")
    } else {
      notify("Invalid Data","error")
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPass: true,
        isAccepted: true
      })
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formField} >
          <label>Name</label>
          <input className={(errors.name && touch.name) ? styles.uncompleted : styles.formInput} type='text' name="name" value={data.name}  onChange={handler} onFocus={focusHandler}/>
          {errors.name && touch.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
          <label>Email</label>
          <input className={(errors.email && touch.email) ? styles.uncompleted : styles.formInput} type='email' name="email" value={data.email} onChange={handler}onFocus={focusHandler}/>
          {errors.email && touch.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>Password</label>
          <input className={(errors.password && touch.password) ? styles.uncompleted : styles.formInput} type='password' name="password" value={data.password} onChange={handler}onFocus={focusHandler}/>
          {errors.password && touch.password && <span>{errors.password}</span>}
        </div>
        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input className={(errors.confirmPass && touch.confirmPass) ? styles.uncompleted : styles.formInput} type='password' name="confirmPass" value={data.confirmPass} onChange={handler}onFocus={focusHandler}/>
          {errors.confirmPass && touch.confirmPass &&  <span>{errors.confirmPass}</span>}
        </div>
        <div className={styles.checkBoxContainer}>
          <label>Policy</label>
          <input  type='checkbox' name="isAccepted" value={data.isAccepted} onChange={handler}onFocus={focusHandler}/>
          {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        <div className={styles.formButtons}>
           <a href="#"> Login </a>
           <button type='submit'> Sign Up</button>
        </div>
      </form>
      <ToastContainer />

      
    </div>
  )
}

export default SignIn