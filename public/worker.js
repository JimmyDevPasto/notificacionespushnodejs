console.log('serviceworkerd');
const fecha = new Date();
self.addEventListener('click', e=>{
  const data = e.data.json()
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon:'https://cdn-icons-png.flaticon.com/512/4381/4381583.png',
    badge:'https://cdn-icons-png.flaticon.com/512/4381/4381609.png',
    click_action: 'https://notificacionespushnodejs-production.up.railway.app/',
    requireInteraction: true,
    timestamp:fecha,
    vibrate: [200, 100, 200]
  })
})
self.addEventListener('notificationclick', event => {
  console.log('Se ha hecho clic en la notificación');
});