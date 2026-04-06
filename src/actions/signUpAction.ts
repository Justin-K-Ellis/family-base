import supabase from "../auth/supabase";
import { redirect } from "react-router";

export default async function signUpAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error(error);
    return { error: error.message };
  }

  return redirect("/");
}
