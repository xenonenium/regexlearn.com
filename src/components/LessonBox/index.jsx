import { FormattedMessage } from 'react-intl';

import IntlLink from '../IntlLink';
import Icon from '../Icon';
import * as styles from './LessonBox.module.css';

const LessonBox = ({ data }) => {
  return (
    <IntlLink href={`/learn/${data.key}`}>
      <a className={styles.LessonBox}>
        <div style={{ backgroundImage: `url(${data.image})` }} className={styles.LessonBoxImage}>
          <span>
            Steps: <b>55</b>
          </span>
          <span>
            Progress: <b>%75</b>
          </span>
        </div>
        <div className={styles.LessonBoxDetail}>
          <h2 className={styles.LessonBoxTitle}>
            <FormattedMessage id={data.title} />
          </h2>
          <p className={styles.LessonBoxDescription}>
            <FormattedMessage id={data.description} />
          </p>
          <div className={styles.LessonBoxStats}>
            <span className={styles.LessonBoxAction}>
              Continue <Icon icon="arrow-right" size={14} />
            </span>
          </div>
        </div>
      </a>
    </IntlLink>
  );
};

export default LessonBox;
