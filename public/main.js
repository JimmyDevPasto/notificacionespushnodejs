const PUBLIC_VAPID_KEY= 'BGv84W0yUezCU6JBojSE1cNY1PHpXG0MfTeYnZzls_utkEX02vsp3DXj0GZio3d5G4vxoi6U_2d295GxihQZKSg'

if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted') {
        // El usuario ha concedido permiso para recibir notificaciones push
      } else {
        // El usuario ha denegado permiso para recibir notificaciones push
      }
    })
  }

const subscription= async()=> {

    // servirce worker
          const register= await navigator.serviceWorker.register('/worker.js', {
            scope:'/'
        });

            console.log('new service workerr');

             const subcription= await register.pushManager.subscribe({
                userVisibleOnly:true,
                applicationServerKey:PUBLIC_VAPID_KEY
            })

       await fetch('https://notificacionespushnodejs-production.up.railway.app/subscription',
        {
            method:'POST',
            body:JSON.stringify(subcription),            
            headers:{
                "Content-Type":"application/json"
            }
        });
        console.log('Suscrito');
}

 const form =document.querySelector('#myform');
  const message=document.querySelector('#message');
  console.log(message.value);
  
  form.addEventListener('submit', e=>{

    e.preventDefault(); 
    fetch('https://notificacionespushnodejs-production.up.railway.app/new-message',{
      method: 'POST',
      body:JSON.stringify({
        message:message.value
      }),
      
      headers:{
        'Content-Type': 'application/json'
      }
    })
      form.reset();
  })

subscription();