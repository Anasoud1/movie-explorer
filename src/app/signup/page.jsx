import { Suspense } from "react";
import SignupComponent from "./signupComponent"

export const metadata = {
  title: "YouMovie - Sign Up",
  description: "Find your movie",
};

const Signup = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupComponent/>
    </Suspense>
  )
}

export default Signup