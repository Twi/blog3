import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return <div className="px-4 mx-auto max-w-screen-md">{children}</div>;
}
