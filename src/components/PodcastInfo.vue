<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useRootStore } from '../stores/root';

export default defineComponent({
  computed: mapState(useRootStore, [
    'podcastData',
  ]),
});
</script>

<template>
  <mdui-card variant="outlined" class="box">
    <div class="insideBox">
      <span>标题：</span>
      <span id="title">{{ podcastData!.pageProps.podcast.title }}</span>
      <br>
      <span>作者：</span>
      <span id="author">{{ podcastData!.pageProps.podcast.author }}</span>
      <br>
      <span>简述：</span>
      <span id="brief">{{ podcastData!.pageProps.podcast.brief }}</span>
    </div>
  </mdui-card>
</template>
