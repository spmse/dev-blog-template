---
id: git-branch
title: Git Branching
sidebar_label: Git Branching
---


# Git Branching

Branching is a powerful feature in Git that allows you to diverge from the main line of development and continue to work without affecting that main line. Here are some common commands to create and manage branches in Git.

| Command                                   | Description                                            |
|-------------------------------------------|--------------------------------------------------------|
| `git branch <branch-name>`                | Create a new branch with the specified name            |
| `git checkout -b <branch-name>`           | Create and switch to a new branch in one command       |
| `git checkout <branch-name>`              | Switch to an existing branch                           |
| `git branch`                              | List all branches in the repository                    |
| `git branch -m <new-branch-name>`         | Rename the current branch to the specified name        |
| `git branch -d <branch-name>`             | Delete a branch (if merged)                            |
| `git branch -D <branch-name>`             | Force delete a branch (if not merged)                  |
| `git merge <branch-name>`                 | Merge the specified branch into the current branch     |


## Creating a New Branch

To create a new branch, use the following command:

```bash
git branch <branch-name>
```

Alternatively, you can create and switch to a new branch in one command:

```bash
git checkout -b <branch-name>

git switch -c <branch-name>
```

## Switching to a Branch

To switch to an existing branch, use:

```bash
git checkout <branch-name>

git switch <branch-name>
```


## Listing Branches

To list all branches in your repository, use:

```bash
git branch

# remote branches only
git branch -r
```

The currently active branch will be highlighted with an asterisk (*).

## Renaming a Branch

To rename the current branch, use:

```bash
git branch -m <new-branch-name>
```

## Deleting a Branch

To delete a branch that you no longer need, use:

```bash
git branch -d <branch-name>
```

If the branch has not been merged, you can force delete it with:

```bash
git branch -D <branch-name>
```

## Updating Branches from remote

```bash
git fetch

# git fetch + git merge
git pull
```

## Merging Branches

To merge changes from one branch into the current branch, use:

```bash
git merge <branch-name>
```

This command merges the specified branch into the current branch.



## Summary

Branching in Git allows for flexible and powerful workflows. By using the commands above, you can create, manage, and merge branches to streamline your development process.

