import { useState, useEffect } from "react";

export default function useHandleEdit(x, y) {
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    if (document.cookie) {
      setLoggedUser(
        JSON.parse(
          document?.cookie?.split(";")
            .find((row) => row.startsWith("user="))?.split("=")[1]
        )
      );
    }
  }, [x, y]);

  return { loggedUser };
}
