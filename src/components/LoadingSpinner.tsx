export default function LoadingSpinner() {
  return (
    <div className="flex gap-1 md:gap-2 items-center justify-center">
      <span className="loading loading-ball loading-xl"></span>
      <span className="loading loading-ball loading-xl"></span>
      <span className="loading loading-ball loading-xl"></span>
    </div>
  );
}
