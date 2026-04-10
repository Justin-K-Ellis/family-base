import SignInSignUp from "../components/SignInSignUp";

export default function SignUpPage() {
  return (
    <main className="mx-auto flex flex-col items-center w-11/12 md:w-1/2">
      <SignInSignUp mode="signup" />
    </main>
  );
}
