---
title: Keep Running
summary: Keep your processes running 
url: https://code.tmp.dev/ian/keep-running
slug: keep-running
---

Keep Running (kr for short) is a small (~145 lines, excluding dependencies) tool that 
restarts your processes after a crash. 

You can configure the restart delay, and how often the process it allowed to crash per minute/hour.
And it will exit once this limit has been exceeded.

Below you see the output for `kr --help`:

```
Usage: kr [OPTIONS] <COMMAND>

Arguments:
  <COMMAND>  

Options:
      --per-minute <PER_MINUTE>  [default: 0]
      --per-hour <PER_HOUR>      [default: 0]
      --delay <DELAY>            [default: 0]
  -h, --help                     Print help
  -V, --version                  Print version
```
