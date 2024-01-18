import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "78a9e15754ff46baa371d6ef96bee4c3",
    
  }
})