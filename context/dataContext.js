import { useState, createContext, useContext } from "react";

const dataContext = createContext();

export function ProvideData({ children }) {
  const data = useProvideData();
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export const useData = () => {
  return useContext(dataContext);
};

function useProvideData() {
  //shared app data
  const [selUploadMode, setSelUploadMode] = useState("portfolio");

  const [selStudent, setSelStudent] = useState(null);
  const [selChatroom, setSelChatroom] = useState(null);
  const [selDiary, setSelDiary] = useState(null);
  const [selChatPart, setSelChatPart] = useState(null);
  const [selPort, setSelPort] = useState(null);

  return {
    selUploadMode,
    setSelUploadMode,

    selChatroom,
    setSelChatroom,

    selChatPart,
    setSelChatPart,

    selStudent,
    setSelStudent,

    selDiary,
    setSelDiary,

    selPort,
    setSelPort
  };
}
