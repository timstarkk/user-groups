import { RewindIcon } from "@heroicons/react/outline";
import { NextApiRequest, NextApiResponse } from "next";
import { groups } from "../../groups";

/**
 * @swagger
 * /api/groups/{id}/users:
 *   get:
 *     description: Gets all the users of the group
 *     responses:
 *       200:
 *         description: The users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ users: [...(groups.get(req.query.id)?.members ?? [])] });
};

export default handler;
