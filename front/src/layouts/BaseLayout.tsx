import type { PropsWithChildren } from "react";

function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section className="base-layout w-full h-full mt-8 flex flex-col items-center justify-center">
        {children}
      </section>
    </>
  );
}

export default BaseLayout;
