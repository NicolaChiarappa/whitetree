import { NextApiRequest, NextApiResponse } from "next";

const success = (req, res) => {
  console.log(req);
  return <div>Ciaooo</div>;
};

export default success;
