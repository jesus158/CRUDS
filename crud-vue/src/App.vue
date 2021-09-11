<template>


   <nav class="navbar navbar-dark bg-dark mb-4" id="nav">
      <a href="/" class="navbar-brand pl-3">CRUD Vue</a>
   </nav>


   <div class="container">
      <div class="row">

         <div class="offset-md-1 col-md-10">
            <div class="card">
                  
               <router-view/>

            </div>
         </div>

      </div>
   </div>

  
</template>
