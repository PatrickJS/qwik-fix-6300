import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import styles from '../../styles.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <div>App Layout</div>
      <main style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Slot />
      </main>
      <div>App Layout</div>
    </>
  );
});
