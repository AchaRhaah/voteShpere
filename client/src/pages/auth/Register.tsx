import React, { useEffect, useState } from "react";
import { handleError } from "../../lib/functions/ErrorMessages";
import { Logo, Avatar, GoogleBtn, Input, Loader } from "../../components/atoms";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/index";
import { registerThunk } from "../../redux/thunk/auth.thunk";
import { authDataType } from "../../repository/types/auth/AuthTypes";
import { RootState } from "../../redux/store/store";

export default function Register() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  navigation("/dashboard/voting");
  const { register } = useAppSelector((state: RootState) => state.authSlice);

  const [userData, setUserData] = useState<authDataType>({
    username: "",
    password: "",
    email: "",
  });
  const errors = handleError(register.message);

  useEffect(() => {
    if (register.isSuccess) {
      navigation("/dashboard/voting");
    }
  }, [register.isSuccess, navigation]);

  // handle input change

  const handleInputChange = (fieldName: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // submit function

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerThunk(userData));
  };

  return (
    <div className="w-full h-screen flex ">
      {/* left side */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        <GoogleBtn text="Sign up with google" />
        <div className="w-full flex items-center justify-between mt-4">
          <div className="border-t-[1.4px] w-[45%] "></div>
          <p>or</p>
          <div className="border-t-[1.4px] w-[45%]"></div>
        </div>
        <form action="" className="mt-8" onSubmit={handleSubmit}>
          <Input
            label="what should we call you?"
            desc="e.g. Bonnie Green"
            onChange={(value) => handleInputChange("username", value)}
          />
          <Input
            label="Email"
            desc="name@votesphere.com"
            onChange={(value) => handleInputChange("email", value)}
          />
          <Input
            label="Password"
            type="password"
            onChange={(value) => handleInputChange("password", value)}
          />
          <div className="w-full my-4 flex flex-col gap-2 ">
            <div className="w-full flex text-xs gap-2 text-[#A9AEB5]">
              <input type="checkbox" />
              <p>
                By signing up, you are agreeing to VoteSphere's{" "}
                <span className="text-[#065AD8]#">Terms of Use</span> and
                <span className="text-[#065AD8]#">Privacy</span>
              </p>
            </div>
            <div className="w-full flex text-xs gap-2 text-[#A9AEB5]">
              <input type="checkbox" />
              <p>Email me about product updates and resources.</p>
            </div>
          </div>
          <p className="text-red-400">{errors.username}</p>
          <p className="text-red-400">{errors.email}</p>
          <p className="text-red-400">{errors.password}</p>

          <button
            className={` ${
              register.isLoading ? "bg-[#3a71c5]" : "bg-[#065AD8]"
            } text-white w-full p-1 rounded-md my-5 flex items-center justify-center gap-2`}
            disabled={register.isLoading}
          >
            {register.isLoading && <Loader />}
            SignUp
          </button>

          <p className="text-xs text-[#A9AEB5]">
            Have an account?{" "}
            <Link to="/">
              <span className="text-[#065AD8]">Login here</span>
            </Link>{" "}
          </p>
        </form>
      </div>
      {/* right side */}
      <div className="w-1/2 bg-[#065AD8] flex flex-col text-white px-20 justify-center items-left">
        <Logo />
        <h1 className="font-bold text-2xl mt-6">
          Empowering Democracy, One Vote at a Time. Welcome to our Online Voting
          Platform. Your Voice Matters!
        </h1>
        <p className="font-thin text-lg mt-6">
          Empower your voice, shape the future. Join our secure, accessible
          platform for seamless, impactful voting experiences that matter.
        </p>
        <div className="mt-4 flex gap-4 items-center">
          <Avatar />
          <div className="h-full border-r border-gray-400"></div>
          <p className="font-thin">
            Rated best over <span className="font-bold">10.2K</span> reviews
          </p>
        </div>
      </div>
    </div>
  );
}
