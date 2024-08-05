import { Suspense } from "react";
import SigninComponent from "./signinComponent";

export const metadata = {
  title: "YouMovie - Sign In",
  description: "Find your movie",
};

const Signin = () => {

return (
  <Suspense fallback={<div>Loading...</div>}>
    <SigninComponent/>
  </Suspense>
  
)
}

export default Signin