import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DataContext = createContext(null);

const DataContextProvider = (props) => {
  const [jobList, setJobList] = useState([]);
  const [listArticles, setListArticles] = useState([]);
  const url = "http://localhost:5000";

  const list = async () => {
    const response = await axios.get(url + "/api/job/get");
    if (response.data.success) {
      setJobList(response.data.data);
    }
  };

  const removeJob = async (JobId, list) => {
    const response = await axios.post(url + "/api/job/delete", { id: JobId });
    if (response.data.success) {
      list();
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  const getArticles = async () => {
    const response = await axios.get(`${url}/api/news/list`);
    if (response.data.success) {
      setListArticles(response.data.data);
    }
  };

  const removeArticle = async (articleId, getArticles) => {
    const response = await axios.post(`${url}/api/news/delete`, {
      id: articleId,
    });
    if (response.data.success) {
      getArticles();
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    list();
    getArticles();
  }, []);

  const DataValue = {
    jobList,
    url,
    removeJob,
    list,
    getArticles,
    removeArticle,
    listArticles,
    setListArticles,
    setJobList,
  };

  return (
    <DataContext.Provider value={DataValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
