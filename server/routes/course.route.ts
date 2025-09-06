import { addAnwser, addQuestion, addReview, editCourse, getAllCourses, getCourseByUser, getSingleCourse } from "./../controller/course.controller";
import { isAutheticated, authorizeRoles } from "./../middleware/auth";
import express from "express";
import { uploadCourse } from "../controller/course.controller";

const courseRouter = express.Router();
courseRouter.post(
  "/create-course",
  isAutheticated,
  authorizeRoles("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  isAutheticated,
  authorizeRoles("admin"),
  editCourse
);
courseRouter.get(
  "/get-course/:id",
  
  getSingleCourse
 
);
courseRouter.get(
  "/get-courses",
  
  getAllCourses
 
);

courseRouter.get(
  "/get-course-content/:id",
  isAutheticated,
  getCourseByUser
  
 
);
courseRouter.put(
  "/add-question",
  isAutheticated,
  addQuestion
  
 
);

courseRouter.put(
  "/add-answer",
  isAutheticated,
  addAnwser
  
 
);

courseRouter.put(
  "/add-review/:id",
  isAutheticated,
  addReview
  
 
);

export default courseRouter;
