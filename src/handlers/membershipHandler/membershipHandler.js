const Stripe = require('stripe')
require('dotenv').config()
const Express = require('express')



const stripe = Stripe(process.env.STRIPE_SECRET)

const member = Express()


const DOMAIN = `http://localhost:3001`

member.post('/create-checkout-session', async (req, res)=>{
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

member.post('/create-portal/session', async (req,res)=>{
    const { session_id } = req.body

    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id)
    
    const returnURL = DOMAIN

    const portalSession = await stripe.billingPortal.sessions.create({
        customer: checkoutSession.customer,
        return_url: returnURL
    })

    res.redirect(303, portalSession.url)
})

member.post('/webhook', Express.raw({ type: 'application/json' }), async(req,res)=>{
    let event = req. json

    const endpointS= 'whsec_a8a5b7c0e432a7b3797df94d921b4fa5e06aaf1fba5d5d44ab7557386f6195f9'

    if(endpointS){
        
    }
})


module.exports = member