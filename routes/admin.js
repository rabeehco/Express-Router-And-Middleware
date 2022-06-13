const express = require('express')
const router = express.Router()

router.get('/topsecret', (req, res) => {
    res.send('This is Top Secret')
})
router.get('/deleteEverything'), (req, res) => {
    res.send('Okay Deleted It All')
}

module.exports = router