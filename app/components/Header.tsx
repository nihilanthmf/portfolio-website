export default function Header(props: any) {
  return (
    <h1 className="text-[70px] font-black text-text dark:text-text">
      {props.children}
    </h1>
  );
}
