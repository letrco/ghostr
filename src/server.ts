import { Hono } from 'hono';
import { nip19 } from 'nostr-tools';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.post('/:bech32', async (c) => {
  const bech32 = c.req.param('bech32');
  const data = nip19.decode(bech32);

  const json = await c.req.json();
  console.log(json);

  switch (data.type) {
    case 'npub':
      // TODO: Remote sign
      console.log('npub', data);
      break;
    case 'nsec':
      // TODO: Local sign
      console.log('nsec', data);
      break;
  }

  return c.text('');
});

Deno.serve(app.fetch);
