const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
    const { username } = req.body

try {

} catch (e) {

}
cbc56182-5688-4e37-8116-e4f563e420ac
    return res.json({ username: username, secret: "sha256..." })
})

app.listen(3001)