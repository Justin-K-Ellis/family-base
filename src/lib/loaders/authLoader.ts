import { redirect } from "react-router";
import supabase from "../../auth/supabase";

export default async function authLoader() {
  try {
    const { data, error: supabaseError } = await supabase.auth.getUser();
    if (supabaseError) {
      return redirect("/");
    }
    if (!data.user) {
      return redirect("/sign-in");
    }
  } catch (error) {
    console.error("Something went wrong in the authLoader.");
    console.error(error);
  }
}
