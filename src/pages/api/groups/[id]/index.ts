import { NextApiRequest, NextApiResponse } from "next";
import { groups } from "..";

/**
 * @swagger
 * /api/groups/{id}:
 *   get:
 *     description: Gets a group by id
 *     responses:
 *       200:
 *         description: The group
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ group: groups.get(req.query.id) });
};

export default handler;
