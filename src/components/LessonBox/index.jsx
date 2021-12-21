import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import IntlLink from '../IntlLink';
import Icon from '../Icon';
import * as styles from './LessonBox.module.css';
import cx from 'classnames';

const LessonBox = ({ data, lock }) => {
  const Wrapper = lock ? Fragment : IntlLink;

  return (
    <Wrapper href={`/learn/${data.key}`}>
      <a className={cx(styles.LessonBox, { [styles.LessonBoxLock]: lock })}>
        <div className={styles.LessonBoxDetail}>
          <h2 className={styles.LessonBoxTitle}>
            <FormattedMessage id={data.title} />
          </h2>
          <p className={styles.LessonBoxDescription}>
            <FormattedMessage id={data.description} />
          </p>
          {!lock && (
            <div className={styles.LessonBoxStats}>
              <div className={styles.LessonBoxStatsInfo}>
                <span>
                  <Icon icon="files-empty" size={15} />
                  55
                </span>
              </div>
              <span className={styles.LessonBoxAction}>
                Continue <Icon icon="arrow-right" size={14} />
              </span>
            </div>
          )}
        </div>
      </a>
    </Wrapper>
  );
};

export default LessonBox;
