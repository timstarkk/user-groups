import { NextApiRequest, NextApiResponse } from "next";
import { users } from "../";

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     description: Gets a user by id
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
  res.status(200).json({ user: users.get(req.query.id) });
};

export default handler;
