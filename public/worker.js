console.log('serviceworkerd');

self.addEventListener('push', e=>{
  const data = e.data.json()
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.message,
    icon:'https://i.pinimg.com/236x/ce/59/83/ce59837dd46efcaa5549a75bf2b1e443.jpg',
    badge:'https://w1.pngwing.com/pngs/667/708/png-transparent-plastic-bag-waste-recycling-electronic-waste-recycling-symbol-recycling-bin-computer-recycling-waste-management.png'
  })
})