console.log('serviceworkerd');

self.addEventListener('push', e=>{
  const data = e.data.json()
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon:'https://cdn-icons-png.flaticon.com/512/4381/4381583.png',
    badge:'https://cdn-icons-png.flaticon.com/512/4381/4381609.png',
    click_action: 'https://notificacionespushnodejs-production.up.railway.app/'
  })
})
self.addEventListener('nofi')