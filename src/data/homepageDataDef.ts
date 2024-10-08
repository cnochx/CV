export interface HomePageMeta {
  title: string;
  description: string;
  image?: string;
  url?: string;
  ogTitle?: '';
  ogLinkPreView?: string;
  ogDescription?: string;
  ogType?: 'article' | 'book' | 'profile' | 'website';
  ogUrl?: string;
  ogImg?: string;
  ogImgType?: 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp';
  ogImgWidth?: string;
  ogImgHeight?: string;
  ogImgAlt?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}
