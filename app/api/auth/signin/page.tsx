import { redirect } from "next/navigation";

const SignIn = ({ searchParams }) => {

    if (searchParams.error != null) {
        console.log(`Error is: ${searchParams.error}`);
        redirect("/login"); // this should redirect to an error page.
    }else { // not sure if this happens
        console.log(searchParams);
        redirect("/dashboard/home");
    }    

}

export default SignIn;