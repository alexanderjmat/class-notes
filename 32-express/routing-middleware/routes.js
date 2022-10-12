const express = require('express')
const router = new express.Router()
const users = [{id: 1, username: "aj1234"}, 
{id: 2, username: "Raven"}]

router.get('/', (req, res) => {
    res.json({users: users})
})

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === 
        +req.params.id)
    res.json(user)

})

module.exports = router;