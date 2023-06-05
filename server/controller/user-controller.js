
import User from '../Scema/user-Scema.js'

export const addUser = async (req, res) => {
    // console.log('hello');
    const user = req.body

    // console.log(user)

    const newUser = new User(user)


    try {
        await newUser.save();
        console.log(newUser)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
        console.log(users)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getUser = async (req, res) => {

    // console.log(req.params.id);
    try {
        // const user = await User.find({_id:req.params.id})
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
        // console.log(user)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editUser = async (req, res) => {
    let user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id }, editUser)
        res.status(200).json(editUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: `your user delete successFully` })
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}