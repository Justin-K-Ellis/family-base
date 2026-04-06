export default function Title(props: { text: string }) {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-center">{props.text}</h1>
  );
}
