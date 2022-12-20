const PUBLIC_VAPID_KEY= 'BGv84W0yUezCU6JBojSE1cNY1PHpXG0MfTeYnZzls_utkEX02vsp3DXj0GZio3d5G4vxoi6U_2d295GxihQZKSg'



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
              console.log(subcription)
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