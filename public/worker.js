console.log('serviceworkerd');
const fecha = new Date();

self.addEventListener('push', e=>{
  const data = e.data.json()

  const title= data.title;

  const options= {
    body: data.message,
    icon:'https://scontent.fclo1-4.fna.fbcdn.net/v/t1.6435-9/119594937_107541191100279_7961959099134270346_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHqX4zZp3Wp_MRVb2bKcRDvmOFbjl6wS6qY4VuOXrBLqquXNMw5wZjYwQIN5-56n3gC393dWtko1tFlNQ8-bLm6&_nc_ohc=pY6KZPJiOPIAX8VWEKk&_nc_ht=scontent.fclo1-4.fna&oh=00_AfCUIGqOEdUb_TTk-Ojz-cFG7_yb_D5ZaqZoWAl7BK_nEQ&oe=63C9B02B',
    badge:'https://cdn-icons-png.flaticon.com/512/4381/4381609.png',
  }

  self.registration.showNotification(title, options);  
})

self.addEventListener('notificationclick', event => {
  console.log('Se ha hecho clic en la notificación');
});