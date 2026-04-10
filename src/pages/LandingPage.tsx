import { Link } from "react-router";
import img from "../assets/img/hero-family.png";
import SignedOutNav from "../components/SignedOutNav";
import { useAuth } from "../auth/AuthProvider";

export default function LandingPage() {
  const { session } = useAuth();

  return (
    <main className="bg-base-100 w-11/12 md:w-8/12 mx-auto flex flex-col gap-4">
      <div
        id="hero-container"
        className="flex flex-col md:flex-row gap-4 my-4 md:my-6 md:justify-around md:items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
          Family Base
        </h1>
        <img
          src={img}
          alt="A happy family sits on a sofa."
          className="rounded-lg md:w-1/2 shadow-lg border border-base-300"
        />
      </div>
      <div
        id="detail-container"
        className="flex flex-col md:flex-row gap-4 md:justify-center"
      >
        <p className="text-xl text-center md:my-6">
          A place for the whole family to connect and cooperate.
        </p>
        <div className="flex gap-2 items-center justify-center">
          {session ? (
            <Link to={"/home"} className="btn btn-primary">
              Home
            </Link>
          ) : (
            <SignedOutNav />
          )}
        </div>
      </div>
    </main>
  );
}
