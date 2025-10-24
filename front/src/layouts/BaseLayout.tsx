import type { JSX } from "react";

interface IBaseLayout {
  children: JSX.Element;
}

function BaseLayout(props: IBaseLayout) {
  const { children } = props;

  return (
    <>
      <section className="base-layout w-full h-full mt-8 flex flex-col items-center justify-center">
        {children}
      </section>
    </>
  );
}

export default BaseLayout;
