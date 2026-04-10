import supabase from "../../auth/supabase";
import { redirect } from "react-router";

export default async function signInAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  try {
    const { error: supabaseError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (supabaseError) {
      console.error(supabaseError);
      return { error: supabaseError.message };
    }
    return redirect("/home");
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong when signing in." };
  }
}
