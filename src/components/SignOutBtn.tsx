import supabase from "../auth/supabase";
import { useNavigate, useNavigation } from "react-router";

export default function SignOutBtn() {
  const navigate = useNavigate();
  const navigation = useNavigation();

  async function handleSignOut(): Promise<void> {
    let errMsg =
      "Something when wrong when trying to sign out. Please try again later.";
    try {
      const { error: supabaseError } = await supabase.auth.signOut();
      if (supabaseError) {
        console.error("Supabase error:", supabaseError);
        alert((errMsg += `\n${supabaseError?.message}`));
      }
      navigate("/");
    } catch (error) {
      console.error("Other error:", error);
      alert(errMsg);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={navigation.state !== "idle"}
      className="btn btn-sm md:btn-md btn-secondary md:ml-2"
    >
      Sign Out
    </button>
  );
}
