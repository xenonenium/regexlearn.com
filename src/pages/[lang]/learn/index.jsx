import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useIntl } from 'react-intl';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import LessonBox from 'src/components/LessonBox';

import { defaultLocale, locales } from 'src/localization';

import lessons from 'src/data/lessons.json';

const LearnPage = dynamic(import('src/components/LearnPage'), { ssr: false });

export default function Learn() {
  const { formatMessage } = useIntl();

  return (
    <>
      <Header />
      <Head>
        <title>{formatMessage({ id: 'page.learn.title' })}</title>
        <link rel="canonical" href="https://regexlearn.com/learn" />
        <meta name="description" content={formatMessage({ id: 'page.learn.description' })} />
        <link rel="stylesheet" href="/css/animate.css" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            {lessons.map(lesson => (
              <LessonBox key={lesson.key} data={lesson} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
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
  return {
    fallback: false,
    paths: locales
      .filter(locale => locale !== defaultLocale)
      .map(lang => ({
        params: {
          lang,
        },
      })),
  };
}
