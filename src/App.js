import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listData, setListData] = useState([]);
  // Lấy dữ liệu từ link api
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        setListData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(listData);
  return <div className="App"></div>;
}

export default App;
