# Understanding CLI command parts in under 5 min

This page aims to briefly explain the different parts a command is built up from, such as Arguments, Options, (Sub-)Commands, etc.

```
docker buildx build [OPTIONS] PATH | URL | -
```

The above given command can be split into multiple pieces that represent a single part each like follows:

| name | description | note |
| :--- | :--- | :--- |
| `docker` | invocation name of the program | often also refered to as 'program name' |
| `buildx`| command | the immediate command instruction to execute |
| `build` | subcommand | not necessarily given, depends on app |
| `[OPTIONS]` | options for the cli program | additional config, e.g. verbose/debug mode |
| `PATH \| URL \| -` | arguments that are required for the command/subcommand combination to execute. ||