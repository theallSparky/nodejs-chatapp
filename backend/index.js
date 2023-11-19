const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
    const { username } = req.body
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "PRIVATE-KEY": "cbc56182-5688-4e37-8116-e4f563e420ac" } }
        )
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
})

app.listen(3001) 