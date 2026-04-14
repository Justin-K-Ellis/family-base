import { Link } from "react-router";

interface GetStartedCardProps {
  title: string;
  description: string;
  icon: string;
  url: string;
}

export default function GetStartedCard(props: GetStartedCardProps) {
  return (
    <div className="card w-full mx-auto bg-base-200 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="justify-end card-actions">
          <Link to={props.url} className="btn btn-primary">
            {props.icon} {props.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
