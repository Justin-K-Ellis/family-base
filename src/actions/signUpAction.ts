import supabase from "../auth/supabase";
import { redirect } from "react-router";

export default async function signUpAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  if (!email || !password || !username) {
    return { error: "Email, username, and password are required." };
  }

  try {
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    if (signUpError) {
      console.error("Error when signing up user through auth.signUp method.");
      console.error(signUpError);
      return { error: signUpError.message };
    }

    return redirect("/");
  } catch (error) {
    console.error(error);
    return {
      error: "Something went wrong when signing up. Please try again later.",
    };
  }
}
