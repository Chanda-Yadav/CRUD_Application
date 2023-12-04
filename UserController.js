import User from "./DatabaseModel.js"


// create and save new user
  export const creates = async (req,res)=>{
  
    

    // new user
    const user = new User({
        Name : req.body.name,
        email : req.body.email,
       
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
          
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}
 
// retrieve and return all users/ retrive and return a single user
 export const finds =async (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        User.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        User.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}
 
// Update a new idetified user by user id
export const update =async (req, res)=>{
    const newData = req.body.Name
    if(!req.body.Name){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.body.id;
    User.findOneAndUpdate( { _id:id }, 
    { $set: { Name: newData } })
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
export const deletes = async (req, res)=>{
    const id = req.body.id;

    User.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}