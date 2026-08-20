import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
let app = express()

const PORT = process.env.PORT || 5000
app.get('/health', (req, res) => {
    return res.status(200).json({ message: ' working goood!' })
})
app.get('/', (req, res) => {
    return res.status(200).json({ message: 'hello world cicd' })
})
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})