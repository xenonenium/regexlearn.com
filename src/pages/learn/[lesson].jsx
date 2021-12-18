import LessonPage from '../[lang]/learn/[lesson]';

import lessons from 'src/data/lessons.json';
import { defaultLocale } from 'src/localization';

export default LessonPage;

export async function getStaticProps(context) {
  return {
    props: {
      lang: defaultLocale,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];

  lessons.forEach(lesson => {
    paths.push({ params: { lesson: lesson.key } });
  });

  return {
    fallback: false,
    paths,
  };
}
