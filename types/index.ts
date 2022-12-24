export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

//category types
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
  //   createdAt?: string;
  //   updatedAt?: string;
  //   publishedAt?: string;
}

//article types
export interface IArticle {
  id: number;
  attributes: IArticlesAttribute;
}
export interface IArticlesAttribute {
  Title: string;
  body: string;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  shortDescription: string;
}
export interface IImageData {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

//
export interface IResourceMeta {
  pagination: IPagination;
}
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
