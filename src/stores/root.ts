import { defineStore } from 'pinia';
import type { Root } from '../types/podcastDetail';

interface State {
  buildId?: string;
  pid?: string;
  podcastData?: Root;
};

export const useRootStore = defineStore('root', {
  state: (): State => {
    return {
      buildId: undefined,
      pid: undefined,
      podcastData: undefined,
    };
  },
  actions: {
    setBuildId(buildId: string){
      this.buildId = buildId;
    },
    setPid(pid: string){
      this.pid = pid;
    },
    setPodcastData(data: Root){
      this.podcastData = data;
    },
  },
});