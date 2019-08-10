const Dev = require('../model/Dev')

module.exports = {
    async store(req, res){

        const {user} = req.headers //usuario logado
        const {devId} = req.params

        const loggedDev =  await Dev.findById(user)
        const targetDev =  await Dev.findById(devId)

        if(!targetDev){
            return res.status(400).json({ error: 'Dev nao existe'})
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('Deu MATCH')
        }

        loggedDev.likes.push(targetDev._id)

        await loggedDev.save()

        return res.json(loggedDev)
    }
}