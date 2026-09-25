export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  result: string;
  imageClass: string;
  tags: string[];
  imageURL:string;
  liveUrl:string;
  featured: boolean,

};

export type Service = {
  slug: string;
  number: string;
  title: string;
  description: string;
  details: string[];
};