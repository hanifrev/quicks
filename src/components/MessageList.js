import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";

const MessageList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {loading ? (
        <ReactLoading
          className="mx-auto pt-[265px]"
          type="spin"
          color="#C4C4C4"
          height={64}
          width={64}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default MessageList;
