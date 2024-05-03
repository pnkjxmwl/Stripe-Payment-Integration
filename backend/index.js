const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*" }))

const stripe = require('stripe')(process.env.SECRET_STRIPE_KEY)

app.post('/checkout', async (req, resp) => {

    try {
        console.log('Serve hit');
        console.log(req.body);
        const session = await stripe.checkout.sessions.create({
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cancel`,
            mode: "payment",
            payment_method_types: ["card"],
            line_items: req.body.items.map(item => {
                return {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: item.name,

                        },
                        unit_amount: (item.price) * 100,
                    },
                    quantity: item.quantity
                }
            })

        })
        resp.json({ url: session.url })
    } catch (error) {
        resp.status(500).json({ error: error.message })
    }
})

app.listen(PORT, (req, resp) => {
    console.log(`Server started at ${PORT}`);
})
