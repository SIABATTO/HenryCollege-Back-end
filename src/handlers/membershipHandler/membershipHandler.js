const Stripe = require('stripe')
require('dotenv').config()
const Express = require('express')


const stripe = Stripe(process.env.STRIPE_SECRET)

const express = Express()

const DOMAIN = `http://localhost:3001`

express.post('/create-checkout-session', async (req, res)=>{
    const prices = await stripe.prices.list({
        lookup_keys: [req.body.lookup_key],
        expand: ['data.product'],
    })
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        line_items: [{
            price: prices.data[0].id,
            quantity: 1
        }],
        mode: 'subscription',
        success_url: `${DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${DOMAIN}?canceled=true`,
    })

    res.redirect(303, session.url)
})


module.exports = express