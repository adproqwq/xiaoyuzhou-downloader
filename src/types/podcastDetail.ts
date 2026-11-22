export interface Root {
  pageProps: PageProps;
}

export interface PageProps {
  podcast: Podcast;
}

/** 顶层播客对象：包含 episodes */
export interface Podcast extends PodcastInfo {
  episodes: Episode[];
}

/** 播客基础信息：顶层与 episode.podcast 共用（后者不含 episodes） */
export interface PodcastInfo {
  type: 'PODCAST';
  pid: string;
  title: string;
  author: string;
  brief: string;
  description: string;
  subscriptionCount: number;
  image: Image;
  color: Color;
  hasTopic: boolean;
  topicLabels: string[];
  syncMode: string;
  latestEpisodePubDate: string;
  subscriptionStatus: string;
  subscriptionPush: boolean;
  subscriptionPushPriority: string;
  subscriptionStar: boolean;
  status: string;
  episodeCount: number;
  permissions: Permission[];
  payType: string;
  payEpisodeCount: number;
  isCustomized: boolean;
  podcasters: Podcaster[];
  hasPopularEpisodes: boolean;
  contacts: Contact[];
  playTime: number;
  showZhuiguangIcon: boolean;
}

export interface Episode {
  type: 'EPISODE';
  timePointCommentsEnabled: boolean;
  eid: string;
  pid: string;
  title: string;
  description: string;
  shownotes: string | null;
  duration: number;
  image: Image;
  enclosure: Enclosure;
  isPrivateMedia: boolean;
  mediaKey: string;
  media: Media;
  playCount: number;
  clapCount: number;
  commentCount: number;
  favoriteCount: number;
  pubDate: string;
  status: string;
  podcast: PodcastInfo;
  isPlayed: boolean;
  isFinished: boolean;
  isFavorited: boolean;
  isPicked: boolean;
  listedInEditorPickAt: string[];
  permissions: Permission[];
  payType: string;
  wechatShare: WechatShare;
  labels: Label[];
  sponsors: unknown[];
  isCustomized: boolean;
  ipLoc: string;
  topicId: string;
  transcript: Transcript;
  transcriptMediaId: string;
  isTranscriptEnabled: boolean;
}

export interface Image {
  picUrl: string;
  width: number;
  height: number;
  format: string;
  thumbnailUrl: string;
  smallPicUrl: string;
  middlePicUrl: string;
  largePicUrl: string;
}

export interface Color {
  original: string;
  light: string;
  dark: string;
}

export interface Permission {
  name: string;
  status: 'PERMITTED' | 'DENIED' | string;
}

export interface Podcaster {
  type?: string;
  uid: string;
  avatar: PodcasterAvatar;
  nickname: string;
  isNicknameSet: boolean;
  bio: string;
  isCancelled: boolean;
  ipLoc: string;
  readTrackInfo: Record<string, unknown>;
}

export interface PodcasterAvatar {
  picture: Image;
}

export interface Contact {
  type: string;
  name: string;
}

export interface Enclosure {
  url: string;
}

export interface Media {
  id: string;
  size: number;
  mimeType: string;
  source: MediaSource;
}

export interface MediaSource {
  mode: string;
  url: string;
}

export interface WechatShare {
  style: string;
}

export interface Label {
  name: string;
  code: string;
}

export interface Transcript {
  mediaId: string;
}