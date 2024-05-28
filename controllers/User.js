const UserModel = require('../model/user')

exports.create = async (req, res) => {
    if (!req.body.name || !req.body.username || !req.body.email || 
        !req.body.address || !req.body.address.street || 
        !req.body.address.suite || !req.body.address.city || 
        !req.body.address.zipcode || !req.body.phone || 
        !req.body.website || !req.body.company || !req.body.company.name) {
        return res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const user = new UserModel({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
            street: req.body.address.street,
            suite: req.body.address.suite,
            city: req.body.address.city,
            zipcode: req.body.address.zipcode,
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
            name: req.body.company.name,
        },
    });
    
    try {
        const data = await user.save();
        res.send({
            message: "User created successfully!!",
            user: data,
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the user",
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};
exports.findOne = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(async data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            await exports.findAll(req, res);
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};