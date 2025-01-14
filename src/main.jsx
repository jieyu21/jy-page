import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './dashboard/Dashboard.jsx'
import {BrowserRouter, Routes, Route} from "react-router";
import Login from "./login/Login.jsx";
import Module from "./module/Module.jsx";
import Class from "./class/Class.jsx";
import Student from "./student/Student.jsx";
import Planning from "./planning/Planning.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <div className="flex w-full">
              <div></div>
              <div className="flex-1">
                  <Routes>
                      <Route path="/login" element={<>
                          <title>Login</title>
                          <Login/>
                      </>}/>
                      <Route path="/" element={<>
                          <title>Dashboard</title>
                          <Dashboard/>
                      </>}/>
                      <Route path="/module" element={<>
                          <title>Module</title>
                          <Module/>
                      </>}/>
                      <Route path="/class" element={<>
                          <title>Class</title>
                          <Class/>
                      </>}/>
                      <Route path="/student" element={<>
                          <title>Student</title>
                          <Student/>
                      </>}/>
                      <Route path="/planning" element={<>
                          <title>Planning</title>
                          <Planning/>
                      </>}/>
                      <Route path="*" element={<>
                          <title>404</title>
                          <div>404</div>
                      </>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  </StrictMode>,
)
