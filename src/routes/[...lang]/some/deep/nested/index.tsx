import { useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const { url } = useLocation();

  return <div>Some deep nested {url.pathname}</div>;
});
