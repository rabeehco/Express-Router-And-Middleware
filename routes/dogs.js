const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("All dogs")
})

router.post('/', (req, res) => {
    res.send("Creating a Dog")
})

router.get('/:id', (req, res) => {
    res.send("One Dog")
})

router.get('/:id/edit', (req, res) => {
    res.send("Editing a Dog")
})

module.exports = router;