### Using Miro client

Miro class is a wrapper that handles authorization and per-user access token management.

To instantiate the client call the Miro instance:

```typescript
import Miro from 'miro-node'

const miro = new Miro()
```

By default client will load the app configuration from environment variables: `MIRO_CLIENT_ID`, `MIRO_CLIENT_SECRET`, `MIRO_REDIRECT_URL`. They can also be provided by passing the options object to the constrictor.

```typescript
const miro = new Miro({
    clientId: 'your_app_id',
    clientSecret: 'your_app_secret',
    redirectUrl: 'https://foo.bar/miro_return_url'
})
```

The client has all methods that are needed to complete Miro authorization flows and make API calls:

1) Check if current user has authorized the app: ```miro.isAuthorized('some_user_id')```
2) Request user to authorize the app by redirecting them to: ```miro.getAuthUrl()```
3) Exchange users authorization code for a token in the return url's request handler: ```await miro.exchangeCodeForAccessToken('some_user_id', 'https://foo.bar/miro_return_url?code=12345')```
4) Use the API as a specific user: `await miro.api('some_user_id').getBoards()`

Most methods (`isAuthorized`, `exchangeCodeForAccessToken`, `api`) take `user_id` as a first paramters. This is the ID of the user in your app. The one that is currently logged in. It can be either a string or a number.

In order to persist user's access and refresh tokens client library requires a persistent storage. By default it uses filesystem to store this state. For production deployments we recommend using a custom implementation backed by a database. It can be passed as an option to Miro contructor:

```typescript
const miro = new Miro({
    storage: new CustomMiroStorage()
})
```

Storage should implement the following interface:

```typescript
export interface Storage {
    read(userId: ExternalUserId): Promise<State|undefined>
    write(userId: ExternalUserId, state: State): Awaitable<void>
}
```

The client will automatically refresh access tokens if it is going to expire soon.

See [the example usage](./examples/fastify.ts) with _fastify_ web framework.

### Using MiroApi directly

Besides the high level stateful Miro client the library also exposes a stateless low level client:

```typescript
import {MiroApi} from './index.ts'

const api = MiroApi('ACCESS_TOKEN')

const boards = await api.getBoards()
```