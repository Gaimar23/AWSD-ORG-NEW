import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import JobList from "./pages/jobList/JobList";
import JobAdd from "./pages/jobAdd/JobAdd";
import NewsList from "./pages/newsList/NewsList";
import NewsAdd from "./pages/newsAdd/NewsAdd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { DataContext } from "./context/DataContext";
import Users from "./pages/users/Users";
import UserEdit from "./pages/userEdit/UserEdit";
import UsersAdd from "./pages/userAdd/UserAdd";

function App() {
  const { jobList, setJobList, url, removeJob, list } = useContext(DataContext);
  useEffect(() => {
    list();
  }, [jobList]);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      {/* <hr /> */}
      <div className="app-container">
        <SideBar />
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/jobs/list" element={<JobList />} />
            <Route path="/jobs/add" element={<JobAdd />} />
            <Route path="/news/list" element={<NewsList />} />
            <Route path="/news/add" element={<NewsAdd />} />
            <Route path="/users/list" element={<Users />} />
            <Route path="/users/add" element={<UsersAdd />} />
            <Route path="/users/single/:userId" element={<UserEdit />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
