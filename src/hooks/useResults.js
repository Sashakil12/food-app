import React from "react";
import yelp from "../yelp";

export default () => {
  const [results, setResults] = React.useState([]);
  const [err, setErr] = React.useState("");
  const searchApi = async searchTerm => {
    try {
      const res = await yelp.get("/businesses/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErr("Something went wrong");
    }
  };
  React.useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, err];
};
