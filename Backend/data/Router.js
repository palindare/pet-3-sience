import { Router } from "express";
import PostController from "./PostController.js";


const router = Router()

router.get("/posts", PostController.getAll)
router.get("/slide/info", PostController.getAllSlide)
router.get("/nav/menu",PostController.getNavInfo)


export default router