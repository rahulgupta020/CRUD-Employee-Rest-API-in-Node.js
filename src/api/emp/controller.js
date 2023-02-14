const employee = require("./model")

// exports.createEmpData = async (req, res)=>{
//     console.log("Create Employee Data");
//     try{
//         const emp = new employee(req.body)
//         const createEmp = await emp.save()
//         res.status(201).send(createEmp)
//     }
//     catch(e){
//         res.status(500).send({"Error = ": e})
//     }
// }

exports.createEmpData = async (req, res)=>{
    console.log("Create Employee Data");
    try{
        const { empid, name, gender, mobile, email, doj } = req.body;
        const emp = new employee({
            empid: empid, name: name, gender: gender, mobile:mobile, email:email, doj:doj
        })
        const createEmp = await emp.save();
        res.status(201).send(createEmp)
    }
    catch(e){
        res.status(500).send({"Error = ": e})
    }
}

exports.readEmpData = async(req, res) =>{
    console.log("Read Employee Data");
    try{
        const emp = await employee.find();
        res.status(200).send(emp)
    }
    catch(e){
        res.status(500).send(e);
    }
}

exports.getParticularEmpData = async(req, res) =>{
    console.log("Get Particular Employee Data");
    try{
        const _id = req.params.id;
        const emp = await employee.findById(_id);
        res.status(200).send(emp);
    }   
    catch(e){
        res.status(500).send(e);
    }
}

exports.updateEmpData = async(req, res) =>{
    console.log("Update Employee");
    try {
        const _id = req.params.id;
        const emp = await employee.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.status(200).send(emp);
    } 
    catch (e) {
        res.status(500).send(e);
    }
}

exports.deleteEmpData = async(req, res) =>{
    console.log("Delete Employee Data");
    try{
        const _id = req.params.id;
        const emp = await employee.findByIdAndDelete(_id);
        res.status(200).send(emp);
    }
    catch(e){
        res.status(500).send(e);
    }
}