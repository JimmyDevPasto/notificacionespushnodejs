import webpush from 'web-push';


webpush.setVapidDetails(
    'mailto:jimmydeveloperpasto@gmail.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
  );

  // This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
    endpoint: '.....',
    keys: {
      auth: '.....',
      p256dh: '.....'
    }
  };
  
  webpush.sendNotification(pushSubscription, 'Your Push Payloadsaffssf Text');



export default  webpush; 