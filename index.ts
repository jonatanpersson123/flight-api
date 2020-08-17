import express from "express"
const app = express()
import cors from "cors"

app.use(
    cors({
        credentials: true,
        origin: true
    })
)
app.options('*', cors())

app.get('/', (req, res) => res.send('Working!!!'))

app.listen(process.env.PORT || 3000, () => {
    console.log('server running on port 3000', '')
})