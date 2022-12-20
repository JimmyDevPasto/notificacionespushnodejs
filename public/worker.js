console.log('serviceworkerd');

self.addEventListener('push', e=>{
  const data = e.data.json()
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon:'https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg',
    badge:'https://cdn-icons-png.flaticon.com/512/4381/4381609.png',
    click_action: 'https://www.flaticon.es/icono-gratis/reciclar_4381609'
  })
})