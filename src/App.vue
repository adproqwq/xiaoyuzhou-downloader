<script lang="ts">
import '@fontsource/material-icons';
import 'unfonts.css';
import 'mdui/mdui.css';
import 'mdui';
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { setColorScheme } from 'mdui';
import GetBuildId from './components/GetBuildId.vue';
import LinkInput from './components/LinkInput.vue';
import PodcastInfo from './components/PodcastInfo.vue';
import Episode from './components/Episode.vue';
import Contact from './components/Contact.vue';
import { useRootStore } from './stores/root';

export default defineComponent({
  computed: mapState(useRootStore, [
    'buildId',
    'podcastData',
  ]),
  components: {
    GetBuildId,
    Contact,
    LinkInput,
    PodcastInfo,
    Episode,
  },
  mounted(){
    setColorScheme('#39C5BB');

    new BroadcastChannel('MountChannal').postMessage('appMounted');
  },
});
</script>

<template>
  <div class="main">
    <div id="getBuildId">
      <GetBuildId></GetBuildId>
    </div>
    <div id="contact">
      <Contact></Contact>
    </div>
    <div id="linkInput" v-if="buildId">
      <LinkInput></LinkInput>
    </div>
    <div id="episodeView" v-if="podcastData">
      <div id="podcastInfo">
        <PodcastInfo></PodcastInfo>
      </div>
      <div id="episode">
        <Episode></Episode>
      </div>
    </div>
  </div>
</template>

<style>
.main {
  margin: auto;
  width: 80vw;
  word-break: break-all;
}

.box {
  display: flex;
  margin: 10px;
  padding: 10px;
  vertical-align: middle;
  text-align: center;
}

.insideBox {
  margin: auto;
}

.insideBox span {
  display: inline-block;
  vertical-align: middle;
}
</style>
