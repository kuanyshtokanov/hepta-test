import axios from "axios";

axios.defaults.baseURL =
  process.env.REACT_APP_IMG_URL || "https://localhost:3000";
