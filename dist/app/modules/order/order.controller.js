"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
// const createOrder = async (req: Request, res: Response) => {
//   const result = await OrderServices.createOrder(req.body);
//   res.send({
//     success: true,
//     statusCode: 200,
//     message: "Order placed successfully",
//     data: result,
//   });
// };
// Get All Orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderServices.getAllOrders();
    res.send({
        success: true,
        statusCode: 200,
        message: "Order fetched successfully",
        data: result,
    });
});
exports.OrderController = {
    // createOrder,
    getAllOrders,
};
