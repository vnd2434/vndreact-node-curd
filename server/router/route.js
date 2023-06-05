import express  from 'express';
import {addUser ,getUsers ,getUser ,editUser ,deleteUser} from '../controller/user-controller.js'




const router  =express.Router()


router.post('/addUser', addUser)
router.get('/allUser', getUsers)
router.get('/:id',getUser)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)

export default router;