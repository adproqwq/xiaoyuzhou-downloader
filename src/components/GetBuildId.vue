<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { useRootStore } from '../stores/root';

export default defineComponent({
  methods: {
    ...mapActions(useRootStore, [
      'setBuildId',
    ]),
    async getBuildId(){
      this.setBuildId(
        (await (await fetch('https://www.xiaoyuzhoufm.com/')).text()).match(/"buildId":"([A-Za-z0-9_-]*)"/)![1],
      );
    },
  },
  computed: mapState(useRootStore, [
    'buildId',
  ]),
});
</script>

<template>
  <mdui-card variant="outlined" class="box" style="display: block;">
    <span>buildId：<slot>{{ buildId }}</slot></span>
    <br>
    <mdui-button variant="filled" @click="getBuildId">获取 buildId</mdui-button>
  </mdui-card>
</template>