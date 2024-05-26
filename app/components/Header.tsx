export default function Header(props: any) {
  return (
    <h1 className="text-[40px] md:text-[70px] font-black text-text text-center dark:text-text w-[70%] md:w-full">
      {props.children}
    </h1>
  );
}
