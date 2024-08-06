docker_build(
  'tsx-issue-266', 
  '.',
  live_update=[
    sync('./src', '/app/src')
  ],
)
docker_compose('./docker-compose.yml')