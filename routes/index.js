import express, { Router } from 'express'; 
import webpush from 'web-push';

import dotenv from 'dotenv';
dotenv.config()

let pushSubscription;

const router=Router(); 

// webpush.setVapidDetails(
//     'mailto:jimmydeveloperpasto@gmail.com',
//     process.env.PUBLIC_VAPID_KEY,
//     process.env.PRIVATE_VAPID_KEY
//   );
webpush.setVapidDetails(
    'mailto:jimmydeveloperpasto@gmail.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
  );

  router.post('/subscription', async (req, res)=>{
    pushSubscription= req.body;
    res.status(200).json();
    const Payload= JSON.stringify({ 
            title: 'My cosutasfa',
            message: 'jelow'
    });

    try {
        await webpush.sendNotification(pushSubscription, Payload);
    } catch (error) {
        console.log(error);   
    }
     
  }); 


export default router;