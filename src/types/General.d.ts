export type Post = {
  _id: number;
  title: string;
  _updatedAt: string;
  slug: {
    current: string;
  };
  body: unknown[];
  category: {
    title: string;
    href: string;
  };
  mainImage: {
    asset: {
      _id;
      url;
    };
  };
};

export type Job = {
  _id: number;
  role: string;
  sub_text: string;
  location: string;
  apply_link: string;
  body: unknown[];
  slug: {
    current: string;
  };
  _publishedAt: string;
}