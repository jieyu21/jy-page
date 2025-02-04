import logo from "./assets/deepbeep_long.png";
import { BookOpenIcon, BookTextIcon, CogIcon, HomeIcon, LogOutIcon, ShapesIcon, UserCogIcon } from "lucide-react";
import pfp from "./assets/pfp.jpg";
import { Route, Routes, useLocation } from "react-router";
import Login from "./login/Login.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import Module from "./module/Module.jsx";
import Class from "./class/Class.jsx";
import Student from "./student/Student.jsx";
import Planning from "./planning/Planning.jsx";
import EachLessonPage from "./module/eachlessonpage.jsx"; 


function App() {
    const path = useLocation().pathname;

    return (
        <div className="flex w-full font-inter">
            {/* Sidebar */}
            <div className={`bg-[#FAFAFA] border-r border-[#F0F0F0] px-3 py-6 ${path !== '/login' ? 'flex' : 'hidden'} flex-col gap-5 max-w-72 fixed h-full`}>
                <div className="flex justify-center">
                    <img src={logo} alt="DeepBeep logo" className="h-12" />
                </div>
                <div
                    className="flex-1 flex flex-col gap-1 *:text-left *:flex text-[#B0B0B0] *:gap-3 *:py-4 *:px-4 *:rounded-lg *:transition">
                    <a href="/" className={`${path === '/' ? 'bg-[#102A57] text-white' : 'hover:bg-neutral-200 hover:text-black'}`}><HomeIcon />Home</a>
                    <a href="/class" className={`${path === '/class' ? 'bg-[#102A57] text-white' : 'hover:bg-neutral-200 hover:text-black'}`}><BookOpenIcon />Current Class</a>
                    <a href="/module" className={`${path === '/module' ? 'bg-[#102A57] text-white' : 'hover:bg-neutral-200 hover:text-black'}`}><ShapesIcon />Modules</a>
                    <a href="/planning" className={`${path === '/planning' ? 'bg-[#102A57] text-white' : 'hover:bg-neutral-200 hover:text-black'}`}><BookTextIcon />Teaching
                        Planner</a>
                    <button className={`hover:bg-neutral-200 hover:text-black`}><CogIcon />Settings</button>
                </div>
                <div className="flex gap-3.5 items-center px-1.5">
                    <div>
                        <img src={pfp} alt="Profile Pic" className="rounded-lg w-20 aspect-square" />
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold">Tee Jing</div>
                        <div className="text-xs text-[#C6C6C6] text-ellipsis overflow-hidden max-w-28">teejing@taylors.edu.my</div>
                    </div>
                    <div className="flex gap-1 *:flex *:justify-center">
                        <div>
                            <button className="p-1.5 rounded-lg transition hover:bg-neutral-200"><UserCogIcon /></button>
                        </div>
                        <div>
                            <button className="p-1.5 text-[#ED5353] rounded-lg transition hover:bg-neutral-200">
                                <LogOutIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-72">
                <Routes>
                    <Route path="/login" element={<>
                        <title>Login</title>
                        <Login />
                    </>} />
                    <Route path="/" element={<>
                        <title>Dashboard</title>
                        <Dashboard />
                    </>} />
                    <Route path="/module" element={<>
                        <title>Module</title>
                        <Module />
                    </>} />
                    <Route path="/class" element={<>
                        <title>Class</title>
                        <Class />
                    </>} />
                    <Route path="/student" element={<>
                        <title>Student</title>
                        <Student />
                    </>} />
                    <Route path="/planning" element={<>
                        <title>Planning</title>
                        <Planning />
                    </>} />
                    
                    {/* Add dynamic route for Each Lesson Page */}
                    <Route path="/lesson/:id" element={<>
                        <title>Lesson Details</title>
                        <EachLessonPage />
                    </>} />

                    <Route path="*" element={<>
                        <title>404</title>
                        <div>404</div>
                    </>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
