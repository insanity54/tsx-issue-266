# tsx issue 266

See https://github.com/privatenumber/tsx/issues/266

`tsx --watch` in a docker container does not reliably run the updated code.

## Tests

`./src/watch-test-1.ts` ensures that tsx is reloading when the source code is touched. tsx seems reliable in this scenario.
`./src/watch-test-2.ts` ensures that tsx is using the new code. tsx seems unreliable in this scenario.


## Various ways of running

### Github Actions

Tests are implemented as github actions. see `.github/workflows/tests.yaml`. 

Use [act](https://github.com/nektos/act) to run the tests locally.


### docker-compose.yml

Credit to [@azhar1038](https://github.com/privatenumber/tsx/issues/266#issuecomment-2074009982)


### Tiltfile

For ease of ad-hoc testing with auto-building docker containers and a nice web UI, I use [Tilt](https://docs.tilt.dev/). 

Run `tilt up` to get started.

Mainly I put this Tiltfile here out of habit and for my own use. It may or may not be helpful to you.