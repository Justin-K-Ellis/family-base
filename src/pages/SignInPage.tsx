import SignInSignUp from "../components/SignInSignUp";

export default function SignInPage() {
  return (
    <main className="mx-auto flex flex-col items-center w-11/12 md:w-1/2">
      <SignInSignUp mode="signin" />
    </main>
  );
}
