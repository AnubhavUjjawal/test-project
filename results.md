### Fact check: A hello world nest.js server on ECS can handle atleast 2745 req/sec.

> Notice that CPU is set to 1024 units and memory reserved is 1000 for the docker container.
#### ECS task Definition
```json
{
  "ipcMode": null,
  "executionRoleArn": "<your ecs execution role arn here>",
  "containerDefinitions": [
    {
      "dnsSearchDomains": null,
      "environmentFiles": null,
      "logConfiguration": {
        "logDriver": "awslogs",
        "secretOptions": null,
        "options": {
          "awslogs-group": "/ecs/test-project",
          "awslogs-region": "ap-south-1",
          "awslogs-stream-prefix": "ecs"
        }
      },
      "entryPoint": null,
      "portMappings": [
        {
          "hostPort": 3000,
          "protocol": "tcp",
          "containerPort": 3000
        }
      ],
      "command": null,
      "linuxParameters": null,
      "cpu": 1024,
      "environment": [
        {
          "name": "PORT",
          "value": "3000"
        }
      ],
      "resourceRequirements": null,
      "ulimits": [
        {
          "name": "nofile",
          "softLimit": 1024000,
          "hardLimit": 1024000
        }
      ],
      "dnsServers": null,
      "mountPoints": [],
      "workingDirectory": null,
      "secrets": null,
      "dockerSecurityOptions": null,
      "memory": 1024,
      "memoryReservation": 1000,
      "volumesFrom": [],
      "stopTimeout": null,
      "image": "ghcr.io/anubhavujjawal/test-project:master",
      "startTimeout": null,
      "firelensConfiguration": null,
      "dependsOn": null,
      "disableNetworking": null,
      "interactive": null,
      "healthCheck": null,
      "essential": true,
      "links": null,
      "hostname": null,
      "extraHosts": null,
      "pseudoTerminal": null,
      "user": null,
      "readonlyRootFilesystem": null,
      "dockerLabels": null,
      "systemControls": null,
      "privileged": null,
      "name": "test-project"
    }
  ],
  "placementConstraints": [],
  "memory": "2048",
  "taskRoleArn": null,
  "compatibilities": [
    "EC2",
    "FARGATE"
  ],
  "taskDefinitionArn": "arn:aws:ecs:ap-south-1:233042135551:task-definition/test-project:5",
  "family": "test-project",
  "requiresAttributes": [
    {
      "targetId": null,
      "targetType": null,
      "value": null,
      "name": "com.amazonaws.ecs.capability.logging-driver.awslogs"
    },
    {
      "targetId": null,
      "targetType": null,
      "value": null,
      "name": "ecs.capability.execution-role-awslogs"
    },
    {
      "targetId": null,
      "targetType": null,
      "value": null,
      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.19"
    },
    {
      "targetId": null,
      "targetType": null,
      "value": null,
      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.21"
    },
    {
      "targetId": null,
      "targetType": null,
      "value": null,
      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.18"
    },
    {
      "targetId": null,
      "targetType": null,
      "value": null,
      "name": "ecs.capability.task-eni"
    }
  ],
  "pidMode": null,
  "requiresCompatibilities": [
    "FARGATE"
  ],
  "networkMode": "awsvpc",
  "cpu": "1024",
  "revision": 5,
  "status": "ACTIVE",
  "inferenceAccelerators": null,
  "proxyConfiguration": null,
  "volumes": []
}
```
> Note: `ghcr.io/anubhavujjawal/test-project:master` was created using commit id `d06cc3eb9151f9ec8d6f2222e38dd98ab0bfde43` of this project. Also make sure the server you are running `k6` on has enough `cpu, memory, and ulimit` [set](https://k6.io/docs/misc/fine-tuning-os/).

#### Results
```
running (15m01.5s), 0000/4800 VUs, 2474676 complete and 0 interrupted iterations
default ↓ [ 100% ] 4800/4800 VUs  15m0s

     data_received..................: 556 MB  617 kB/s
     data_sent......................: 213 MB  237 kB/s
     http_req_blocked...............: avg=69.36µs  min=1.53µs   med=3.03µs  max=1.95s    p(90)=3.26µs   p(95)=4.23µs
     http_req_connecting............: avg=31.3µs   min=0s       med=0s      max=1.19s    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=36.11ms  min=483.68µs med=2.18ms  max=2.71s    p(90)=29.11ms  p(95)=169.01ms
       { expected_response:true }...: avg=36.1ms   min=483.68µs med=2.18ms  max=2.71s    p(90)=29.1ms   p(95)=168.92ms
     http_req_failed................: 0.00%   ✓ 95          ✗ 2474581
     http_req_receiving.............: avg=461.83µs min=25.14µs  med=50.12µs max=1.1s     p(90)=223.27µs p(95)=501.09µs
     http_req_sending...............: avg=40.88µs  min=19.07µs  med=34.72µs max=714.96ms p(90)=54.46µs  p(95)=63.67µs
     http_req_tls_handshaking.......: avg=32.69µs  min=0s       med=0s      max=1.27s    p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=35.61ms  min=4.59µs   med=2.02ms  max=2.71s    p(90)=28.7ms   p(95)=165.9ms
     http_reqs......................: 2474676 2744.959049/s
     iteration_duration.............: avg=1.04s    min=1s       med=1s      max=3.72s    p(90)=1.04s    p(95)=1.2s
     iterations.....................: 2474676 2744.959049/s
     vus............................: 120     min=14        max=4800
     vus_max........................: 4800    min=4800      max=4800
```