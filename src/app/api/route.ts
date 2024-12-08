import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method == "GET") {
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
