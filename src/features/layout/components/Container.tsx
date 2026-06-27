import { forwardRef } from "react";

const Container = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    id?: string;
  }
>(function Container({ children, className = "", id }, ref) {
  return (
    <div
      ref={ref}
      id={id}
      className={[
        "w-full mx-auto",
        "px-4 sm:px-6 lg:px-8 2xl:px-12 min-[3000px]:px-16 min-[4000px]:px-20 min-[5000px]:px-24",
        "max-w-[1100px] lg:max-w-[1400px] 2xl:max-w-[1800px] min-[3000px]:max-w-[2200px] min-[4000px]:max-w-[2600px] min-[5000px]:max-w-[3000px]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
});

export default Container;
