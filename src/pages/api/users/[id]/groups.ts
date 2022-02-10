import { RewindIcon } from "@heroicons/react/outline";
import { NextApiRequest, NextApiResponse } from "next";
import { groups } from "../../groups";

/**
 * @swagger
 * /api/users/{id}/groups:
 *   get:
 *     description: Gets all the groups of the user
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
  res.status(200).json({ groups: [...groups.values()].filter((g) => g.members.has(req.query.id)) });
};

export default handler;
