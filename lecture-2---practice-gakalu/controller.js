const programModel=require('./model');

exports.add = async (req, res) => {
    const pro = await programModel.create(req.body);
    res.send(pro)
}