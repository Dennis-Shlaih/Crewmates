import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./routes/Layout";
import CreateCrewmateForm from "./routes/CreateCrewmateForm";
import Gallery from "./routes/Gallery"; 
import Edit from "./routes/Edit"; 
import Detail from "./routes/Detail"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="create" element={<CreateCrewmateForm />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="edit/:id" element={<Edit/>} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
