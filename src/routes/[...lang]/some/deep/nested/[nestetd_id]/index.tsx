import { useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const { url } = useLocation();

  return <div>Some deep nested with ID {url.pathname}</div>;
});
