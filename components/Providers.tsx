"use client";
import { SessionProvider } from "next-auth/react";
import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </SessionProvider>
  );
};

export default Providers;
