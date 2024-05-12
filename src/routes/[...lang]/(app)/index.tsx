import { useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const { url } = useLocation();

  return (
    <div>
      <div>I'm index page, my path is {url.pathname}</div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
          marginTop: '1rem',
        }}
      >
        <a href="/some/deep/nested/llsome_id">
          /some/deep/nested/some_id BROKEN
        </a>
        <a href="/some_lang/some/deep/nested/some_id">
          /some_lang/some/deep/nested/some_id with some_lang
        </a>

        <a href="/some/deep/nested">/some/deep/nested</a>
        <a href="/some_lang/some/deep/nested">
          /some_lang/some/deep/nested with some_lang
        </a>

        <a href="/working/nesting/some_id">/working/nesting/some_id</a>
        <a href="/some_lang/working/nesting/some_id">
          /working/nesting/some_id with some_lang
        </a>
      </div>
    </div>
  );
});
