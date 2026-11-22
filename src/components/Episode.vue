<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { dialog } from 'mdui';
import { useRootStore } from '../stores/root';
import formatDuration from '../utils/formatDuration';

export default defineComponent({
  computed: mapState(useRootStore, [
    'podcastData',
  ]),
  methods: {
    expandDesc(title: string, desc: string){
      const container = document.createElement('div');

      container.style.whiteSpace = 'pre-wrap';
      container.style.overflowWrap = 'anywhere';
      container.textContent = desc;

      dialog({
        headline: '简介',
        description: title,
        body: container,
        closeOnEsc: true,
        closeOnOverlayClick: true,
      });
    },
    formatDuration(duration: number){
      return formatDuration(duration);
    },
    download(url: string){
      window.open(url);
    },
  },
});
</script>

<template>
  <mdui-card variant="outlined" id="episodeCards" class="box" style="display: inline-block;">
    <mdui-card
      variant="outlined"
      class="episode"
      @click.self="expandDesc(episode.title, episode.description)"
      clickable
      v-for="episode in podcastData?.pageProps.podcast.episodes"
    >
      <span>标题：<slot id="title">{{ episode.title }}</slot></span>
      <br>
      <span>时长：<slot id="duration">{{ formatDuration(episode.duration) }}</slot></span>
      <br>
      <mdui-button variant="filled" @click="download(episode.enclosure.url)">下载</mdui-button>
    </mdui-card>
  </mdui-card>
</template>

<style>
.episode {
  height: 20vh;
  width: 30vw;
}
</style>