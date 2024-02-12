<template>
    <div class="post-preview">
      <!-- <router-link :to="{ name: 'posts', params: { id: posts.id } }"> -->
        <h2 class="post-title">
          {{ posts.title }}
        </h2>
        <h3 class="post-subtitle">
         body
        </h3>
      <!-- </router-link> -->
      <p class="post-meta">
        Posted by
        <a href="#">Test-utils</a>
      </p>
      <hr />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Repository from "@/api/common/RepositoryFactory";
  const UserRepository = Repository.get("users");
  
  const props = defineProps({
    posts: {
      type: Object,
      required: true
    }
  });
  
 // const username = ref("1");
  
  onMounted(async () => {
   // await getPostUsername(props.posts.userId);
  });
  
//   const getPostUsername = async (id) => {
//     const { data } = await UserRepository.getUser(id);
//     username.value = data.title;
//   };
  </script>
  
  
  <style>
  </style>