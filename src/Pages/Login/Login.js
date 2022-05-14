import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useEffect(()=>{
    if (user || gUser) {
      navigate(from,{replace:true});
    }
  },[user,gUser,from,navigate]);
  if(error || gError){
    signInError = <p className="text-red-500"><small>{error.message || gError}</small></p>
  }
  if(loading || gLoading){
    return <Loading></Loading> 
  }
const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold">Login</h2>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Provide a password 6 characters or long",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {signInError}
            </label>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="btn w-full max-w-xs" value="Login" type="submit" />
          </form>
          <p><small>New to Doctors Portal? <Link className="text-primary" to='/signup'>Create an account.</Link></small></p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
