export type Post = {
  id: number;
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
