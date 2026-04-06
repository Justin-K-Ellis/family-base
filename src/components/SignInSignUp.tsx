import { Form } from "react-router";
import Title from "./Title";
import { useActionData } from "react-router";

interface SignInSignUpProps {
  mode: "signin" | "signup";
}

export default function SignInSignUp(props: SignInSignUpProps) {
  const titleText = props.mode === "signin" ? "Sign In" : "Sign Up";
  const actionData = useActionData();

  return (
    <Form
      method="post"
      className="card card-border flex flex-col items-center p-2 gap-2 md:w-1/2 mx-0"
    >
      <Title text={titleText} />
      {actionData?.error && <p className="text-red-500">{actionData.error}</p>}
      <label className="input">
        <span className="label">Email</span>
        <input
          type="text"
          placeholder="user@email.com"
          name="email"
          id="email"
          required
        />
      </label>
      <label className="input">
        <span className="label">Password</span>
        <input type="password" name="password" id="password" required />
      </label>
      <button type="submit" className="btn btn-primary">
        {titleText}
      </button>
    </Form>
  );
}
