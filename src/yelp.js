import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization:
      "Bearer BdgJyOVcJmFmz4mJiMXYpkyYwFWKYrcvPCW9LWcLx0NcZ5_UufU-1rpwcZdjJ9siTSIgzG5lkSu0ocEMgeZWymPE7hmfvFPni2EJevRSx8SdPpBzM5CEKsPHnP1bXnYx"
  }
});
