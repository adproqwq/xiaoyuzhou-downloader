<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { type ButtonIcon, type TextField } from 'mdui';
import { useRootStore } from '../stores/root';
import type { Root } from '../types/podcastDetail';

export default defineComponent({
  computed: mapState(useRootStore, [
    'buildId',
    'pid',
    'podcastData',
  ]),
  methods: {
    ...mapActions(useRootStore, [
      'setPid',
      'setPodcastData',
    ]),
    async getPodcastId(event: MouseEvent){
      const url = ((event.target as ButtonIcon).parentElement! as unknown as TextField).value;
      console.log(url.split('/'));
      const pid = url.split('/')[4];

      this.setPid(pid);
      await this.getPodcastDetail();
    },
    async getPodcastDetail(){
      const data = await (await fetch(
        `https://www.xiaoyuzhoufm.com/_next/data/${this.buildId}/podcast/${this.pid}.json`
      )).json() as Root;

      this.setPodcastData(data);
    },
  },
});
</script>

<template>
  <mdui-card class="box" variant="outlined">
    <div class="insideBox">
      <span>输入播客合集网址</span>
      <br>
      <span>它应该形如：https://www.xiaoyuzhoufm.com/podcast/65aa26dc852be0e11c711ef3</span>
      <mdui-text-field variant="filled" type="url" placeholder="请输入播客合集页网址" clearable>
        <mdui-button-icon slot="end-icon" icon="check" @click="getPodcastId($event)"></mdui-button-icon>
      </mdui-text-field>
    </div>
  </mdui-card>
</template>
