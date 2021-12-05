import LessonPage from '../[lang]/learn/[lesson]';

import lessons from 'src/data/lessons.json';

export default LessonPage;

export async function getStaticProps(context) {
  return {
    props: {},
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
