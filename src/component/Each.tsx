import { ReactElement, ReactNode } from "react";
type EachProps<T> = {
    render: (item: T, index: number) => ReactNode;
    of: T[];
  };
  export const Each = <T,>({ render, of }: EachProps<T>): ReactElement => (
    <>
    {of.map((item, index) => render(item, index))}
    </>
  );