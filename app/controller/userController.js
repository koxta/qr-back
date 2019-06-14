const User = require("../model/userModel");



exports.add_device = (req,res) =>{
    const deviceId = req.params.id;
    User.addDevice(deviceId,
        (result)=>{
            console.log(result);
            res.send(result);
        })
}