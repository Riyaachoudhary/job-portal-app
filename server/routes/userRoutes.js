import express, { Router } from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'
import { requireAuth } from '@clerk/express'


const router = express.Router()


// Get user data
router.get('/user',requireAuth(), getUserData)


//apply for a job
router.post('/apply', requireAuth(), applyForJob)


// get applied job data
router.get('/applications',requireAuth(), getUserJobApplications)


//update user profile(resume)
router.post('/update-resume',requireAuth(), upload.single('resume'), updateUserResume)


export default router