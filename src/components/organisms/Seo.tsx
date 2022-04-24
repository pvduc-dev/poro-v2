import * as React from 'react';
import {Helmet} from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby';
import {FC} from "react";
import {useDarkMode} from "usehooks-ts";

interface SeoProps {
  title?: string;
  description?: string;
  meta?: string;
  siteUrl?: string;
}

const Seo: FC<SeoProps> = ({title, description, meta, siteUrl} ) => {
  const { isDarkMode } = useDarkMode(true);
  return (
    <Helmet
      htmlAttributes={{
        className: isDarkMode ? 'dark' : 'light',
        lang: 'en',
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: 'Pv Duc Developer',
        },
        {
          property: 'og:description',
          content: 'Pv Duc Web Developer Portfolio'
        }
      ]}
    />
  )
};

export default Seo;
