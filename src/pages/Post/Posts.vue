<template>
    <div class="row">
      <Post v-for="(post, i) in posts" :key="i" :posts="post" />
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Repository from "@/api/common/RepositoryFactory";
  const PostRepository = Repository.get("posts");
  import Post from "./Post.vue";
  
  const posts = ref([]);
  
  onMounted(async () => {
    await getPosts();
  });
  
  const getPosts = async () => {
    const { data } = await PostRepository.get();
    console.log(data);
    posts.value = data;
  };
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>