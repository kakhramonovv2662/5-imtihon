import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UseHooks() {
  const { user, setUser } = useContext(AuthContext);

  return [user, setUser];
}
