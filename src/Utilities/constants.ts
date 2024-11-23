export const END_POINT = "https://personal-bolg-be.onrender.com/";

export const API_URL_CONSTANT = {
  SIGN_IN: `${END_POINT}auth/token`,
  SIGN_UP: `${END_POINT}auth/create_normal_user`,
  GOOGLE_AUTH: `${END_POINT}social-login`,
  POST_ARTICLE : `${END_POINT}articles/` ,
  GET_ALL_ARTICLES : `${END_POINT}articles/`,
  GET_USER_ARTICLES :`${END_POINT}articles/user_articles`,
  GET_LOGIN_USER:`${END_POINT}auth/`,
  GET_AUTHORS:`${END_POINT}articles/authors`,
};

export const ROUTER_URL_CONSTANT = {
  MAIN: "/PERSONAL-BLOGGING-FE/",
  SIGN_IN: "/PERSONAL-BLOGGING-FE/signin",
  SIGN_UP: "/PERSONAL-BLOGGING-FE/signup",
  DASHBOARD: "/PERSONAL-BLOGGING-FE/dashboard",
  ALLPOSTS: "/PERSONAL-BLOGGING-FE/allPosts",
  POST_ARTICLE: "/PERSONAL-BLOGGING-FE/post_article",
  VIEW_ARTICLE: "/PERSONAL-BLOGGING-FE/view_article"
};


export const USER_ID = "user_id";

