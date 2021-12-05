import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useIntl } from 'react-intl';

import { defaultLocale, locales } from 'src/localization';

import lessons from 'src/data/lessons.json';

const LearnPage = dynamic(import('src/components/LearnPage'), { ssr: false });

export default function Learn() {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>{formatMessage({ id: 'page.learn.title' })}</title>
        <link rel="canonical" href="https://regexlearn.com/learn" />
        <meta name="description" content={formatMessage({ id: 'page.learn.description' })} />
        <link rel="stylesheet" href="/css/animate.css" />
      </Head>
      <LearnPage />
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      lang: params.lang,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  locales
    .filter(locale => locale !== defaultLocale)
    .forEach(locale => {
      lessons.forEach(lesson => {
        paths.push({ params: { lesson: lesson.key, lang: locale } });
      });
    });

  return {
    fallback: false,
    paths,
  };
}
