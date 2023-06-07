import { Injectable } from "@nestjs/common";
import Stripe from "stripe";

import { PaymentResponse } from "src/interfaces/payment";

@Injectable()
export class PaymentService {
  async generateSession(ammount: number): Promise<PaymentResponse> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2022-11-15" }
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: ammount * 100,
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: { enabled: true },
    });

    return {
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: process.env.STRIPE_SECRET_KEY,
    };
  }
}
