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
    console.log(pushSubscription);
    res.status(200).json();    
  }); 
    
  const fecha = new Date();
    router.post('/new-message', async (req, res)=>{
      const {message}= req.body; 

      const Payload= JSON.stringify({ 
        title: 'hoy tienes recoleccion',
        message,
        click_action: 'https://notificacionespushnodejs-production.up.railway.app/',
        requireInteraction: true,
        timestamp:fecha,
    vibrate: [200, 100, 200]
    });
       try {
        await webpush.sendNotification(pushSubscription, Payload);
      } catch (error) {
        console.log(error);   
      }
      
    })

    
     



export default router;