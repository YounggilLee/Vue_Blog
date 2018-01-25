<template>
  <nav class="navbar navbar-default">
   <div class="container-fluid">

     <div class="navbar-header">
       <router-link to="/" class="navbar-brand">Blog</router-link>
     </div>

     <div class="collapse navbar-collapse">
       <ul class="nav navbar-nav">
         
         <router-link to="/add" activeClass="active" tag="li"><a>Add a new blog</a></router-link>
       </ul>

     </div><!-- /.navbar-collapse -->
   </div><!-- /.container-fluid -->
 </nav>
</template>
