import { useActionData, useNavigation, Form } from "react-router";
import Title from "./Title";
import LoadingSpinner from "./LoadingSpinner";

interface SignInSignUpProps {
  mode: "signin" | "signup";
}

export default function SignInSignUp(props: SignInSignUpProps) {
  const titleText = props.mode === "signin" ? "Sign In" : "Sign Up";
  const actionData = useActionData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <LoadingSpinner />;

  return (
    <Form
      method="post"
      className="card card-border flex flex-col items-center p-2 gap-2 md:w-1/2 mx-0 bg-base-200"
    >
      <Title text={titleText} />
      {/* Error flash */}
      {actionData?.error && <p className="text-red-500">{actionData.error}</p>}
      {/* Email */}
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
      {/* Username */}
      {props.mode === "signup" && (
        <label className="input">
          <span className="label">Name</span>
          <input
            type="text"
            placeholder="Papa"
            name="username"
            id="username"
            required
          />
        </label>
      )}
      {/* Password */}
      <label className="input">
        <span className="label">Password</span>
        <input type="password" name="password" id="password" required />
      </label>
      <button
        type="submit"
        disabled={navigation.state === "submitting"}
        className="btn btn-primary"
      >
        {titleText}
      </button>
    </Form>
  );
}
