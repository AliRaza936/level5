import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
let app = express()

const PORT = process.env.PORT || 3000
app.get('/health', (req, res) => {
    return res.status(200).json({ message: 'everything well!' })
})
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'hello, ali!all good' })
})
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})