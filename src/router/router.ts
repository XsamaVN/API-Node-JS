import {Router} from "express";
import {BlogController} from "../controller/BlogController";
import {UserController} from "../controller/UserController";
import {auth} from "../middleware/auth";

const router = Router();
//blog api
const blogController = new BlogController();
router.use("/blogs", auth);
router.get("/blogs", blogController.findAll);
router.post("/blogs", blogController.save);
router.put("/blogs/:id",blogController.update)
router.get("/blogs/:id", blogController.getOne);
router.delete("/blogs/:id", blogController.delete);

//user api
const userController = new UserController()
router.get("/users", userController.findAll);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get('', userController.getCurrentUser);
router.put("/users/:id",userController.update)
router.get("/users/:id", userController.getOne);
router.delete("/users/:id", userController.delete);
export default router;
