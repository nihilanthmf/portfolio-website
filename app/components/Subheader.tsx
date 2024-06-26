export default function Subheader(props: any) {
  return (
    <h1 className="text-xl md:text-2xl font-bold text-text dark:text-text">
      {props.children}
    </h1>
  );
}
