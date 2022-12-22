
import express from 'express';

import { getUsers,loadUsers, updateUser,downloadCsv } from '../controllers/usersCon.js';

const router = express.Router();

router.get("/", getUsers);
router.patch("/:id", updateUser);
router.get("/populate", loadUsers);
router.get("/downloadCsv", downloadCsv)


export default router;