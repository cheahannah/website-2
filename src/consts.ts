import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Hannah Chea",
  EMAIL: "xirimpi@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Hannah Chea's personal website to showcase her content creator and artist work.",
};

export const PORTFOLIO: Metadata = {
  TITLE: "Portfolio",
  DESCRIPTION: "Hannah Chea's collection of content creation, fashion design, and modeling work.",
};

export const PRESS: Metadata = {
  TITLE: "Press",
  DESCRIPTION: "Hannah Chea's appearances in media, interviews, and collaborations.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "instagram",
    HREF: "https://www.instagram.com/xirimpi",
  },
  { 
    NAME: "tiktok",
    HREF: "https://www.tiktok.com/@xirimpi"
  },
  {
    NAME: "facebook",
    HREF: "https://www.facebook.com/cheahannah", 
  },
  { 
    NAME: "youtube",
    HREF: "https://www.youtube.com/channel/UCNnSxa0u39kUHOBAl_F8Gjg", 
  },
  { 
    NAME: "x",
    HREF: "https://x.com/xirimpi", 
  },
  {
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/cheahannah",
  },
  {
    NAME: "email",
    HREF: "mailto:xirimpi@gmail.com",
  }
];
