import { redirect } from "react-router";
import supabase from "../../auth/supabase";

export default async function authLoader() {
  try {
    const { data, error: supabaseError } = await supabase.auth.getUser();
    if (supabaseError) {
      return redirect("/");
    }
    if (!data.user) {
      console.log("bounce user to sign in");
      return redirect("/sign-in");
    } else {
      console.log("user passes through");
    }
  } catch (error) {
    console.error("Something went wrong in the authLoader.");
    console.error(error);
  }
}
