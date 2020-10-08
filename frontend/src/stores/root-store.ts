import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { rootExperiencesReducer } from "./experiences-read-store";
import { rootSkillsReducer } from "./skills-read-store";
import { experiencesStoreOnMiddleware } from "./experiences-store";
import { skillsStoreOnMiddleware } from "./skills-store";
import { rootWorksReducer } from "./works/works-read-store";
import { worksStoreOnMiddleware } from "./works/works-store";
import { rootArticlesReducer } from "./articles/articles-read-store";
import { articlesStoreOnMiddleware } from "./articles/articles-store";

const rootReducer = combineReducers({
  ...rootExperiencesReducer,
  ...rootWorksReducer,
  ...rootSkillsReducer,
  ...rootArticlesReducer,
});

const rootMiddleware = [
  experiencesStoreOnMiddleware,
  worksStoreOnMiddleware,
  skillsStoreOnMiddleware,
  articlesStoreOnMiddleware,
];

export type RootState = ReturnType<typeof rootReducer>;

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
});
