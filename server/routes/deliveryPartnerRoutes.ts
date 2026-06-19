import express from "express";
import { cancelDelivery, getDeliveryDetail, getMyDeliveries, loginPartner, updateDeliveryStatus, updateLocation } from "../controllers/deliveryPartnerController.js";
import deliveryAuth from "../middleware/deliveryAuth.js";


const deliveryPartnerRouter = express.Router();

deliveryPartnerRouter.post('/login', loginPartner)
deliveryPartnerRouter.post('/my-deliveries', deliveryAuth, getMyDeliveries)
deliveryPartnerRouter.post('/my-deliveries/:id', deliveryAuth, getMyDeliveries)
deliveryPartnerRouter.post('/my-deliveries/:id/complete', deliveryAuth, getDeliveryDetail)
deliveryPartnerRouter.post('/my-deliveries/:id/cancel', deliveryAuth, cancelDelivery)
deliveryPartnerRouter.post('/my-deliveries/:id/status', deliveryAuth, updateDeliveryStatus)
deliveryPartnerRouter.post('/my-deliveries/:id/location', deliveryAuth, updateLocation)


export default deliveryPartnerRouter;