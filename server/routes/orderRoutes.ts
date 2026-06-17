import express from "express";
import auth from "../middleware/auth.js";
import { createOrder, getAllOrders, getOrder, getOrderLocation, getUserOrders, updateOrderStatus } from "../controllers/orderController.js";
import admin from "../middleware/admin.js";


const orderRouter = express.Router();

orderRouter.post('/', auth, createOrder);
orderRouter.post('/', auth, getUserOrders);
orderRouter.post('/all', auth, admin, getAllOrders);
orderRouter.post('/:id', auth, getOrder);
orderRouter.post('/:id/status', auth, admin, updateOrderStatus);
orderRouter.post('/:id/location', auth, getOrderLocation);

export default orderRouter