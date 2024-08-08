export function Container({ children, id }) {
  return (
    <div
      id={id}
      className="flex flex-col gap-5 border-[1px] rounded-xl border-gray-500 p-10"
    >
      {children}
    </div>
  );
}
