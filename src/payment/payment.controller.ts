import { Body, Controller, Post } from "@nestjs/common";

import { PaymentService } from "./payment.service";
import { PaymentResponse } from "src/interfaces/payment";

@Controller("payment")
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  generateSession(@Body() { ammount }): Promise<PaymentResponse> {
    return this.paymentService.generateSession(ammount);
  }
}
