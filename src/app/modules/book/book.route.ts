import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getAllBooks);
router.get("/:id", BookControllers.singleBook);
router.get("/:categoryId", BookControllers.bookByCategory);
router.patch("/:id", BookControllers.updateBook);
router.delete("/:id", BookControllers.deleteBook);

export const BookRoutes = router;
