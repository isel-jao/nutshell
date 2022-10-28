import React, { useState, useEffect } from "react";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
};

const useGenrateRandomJoke = () => {
  const [update, setUpdate] = useState(false);
  const [joke, setJoke] = React.useState("");

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setJoke(response.data.joke);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [update]);

  return [joke, () => setUpdate(!update)];
};

export default useGenrateRandomJoke;
