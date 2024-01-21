"use client";

import { PropsWithChildren, createContext, useState } from "react";

export const TitleContext = createContext({
  title: "",
  setTitle: (title: string) => {},
});
const TitleContextProvider = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState("");
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextProvider;
