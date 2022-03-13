import { Route, Routes } from "react-router-dom";
import SiteLink from "./SiteLink/SiteLink";
import Users from "./Users/Users";

import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <SiteLink />
      <Routes>
        <Route path="/all" element={<Users />} />
        <Route path="/design" element={<>Design Page</>} />
        <Route path="/ux" element={<>UX Page</>} />
        <Route path="/ui" element={<>UI Page</>} />
        <Route path="/typography" element={<>Typography Page</>} />
      </Routes>
    </div>
  );
}
