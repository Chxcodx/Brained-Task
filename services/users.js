const { User } = require("../models/users");

const getUsers = async (req, res) => {
    try {
        const data = await User.findAll();
        res.status(200).send(data)
    } catch (err) {
        console.error(err);
    }
};

const addUser = async (req, res) => {
    try {
        const data = await User.create({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
        })
        const response = {
            status: 200,
            data: data,
            message: 'User Created Successfully'
        }
        res.send(response)
    } catch (err) {
        console.error(err);
    }
}
const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.destroy({
            where: {
                id: id,
            }
        })
        res.send("User deleted Successfully")
    }
    catch (err) {
        console.error(err)
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        await User.update(data, {
            where: {
                id: id
            }
        })

        res.send('User Updated Successfully')

    } catch (err) {
        console.error(err)
    }
}


const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await User.findOne({
            where: {
                id: id
            }
        })

        res.send(data)

    } catch (err) {
        console.error(err)
    }
}
module.exports = { getUsers, addUser, deleteUser, updateUser, getUserById }


