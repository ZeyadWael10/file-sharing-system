import { Router } from 'express';
const router = Router();
import * as UserController from "./User.Controller.js"
import { asyncHandler } from "../../Utils/ErrorHandling.js";
import { auth } from '../../Middlewares/Authentication.js';
import { ValidationFunction } from '../../Middlewares/Validation.js';
import { forgetPasswordValidation, loginValidation, resetPasswordValidation, signUpValidatinon, updateValidation } from './User.Validation.js';
router.post('/signup',ValidationFunction(signUpValidatinon),asyncHandler(UserController.signUp))
router.post('/signin',ValidationFunction(loginValidation),asyncHandler(UserController.login))
router.patch('/update',ValidationFunction(updateValidation),auth(),asyncHandler(UserController.updateUser))
router.post('/logout',auth(),asyncHandler(UserController.logout))
router.delete('/delete',auth(),asyncHandler(UserController.deleteUser))
router.post('/forget',ValidationFunction(forgetPasswordValidation),asyncHandler(UserController.forgetPassword)) // request forget password (before login)
router.post('/reset',ValidationFunction(resetPasswordValidation),asyncHandler(UserController.ResetPassword)) // actual function for reseting password (before login and after sending email)
export default router;
