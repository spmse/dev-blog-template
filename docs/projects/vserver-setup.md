# V-Server Setup

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/spmse/dev-blog-template"
    title="Github Tip" 
    type="tip"
/>

## Quickstart

1. Create a SSH key pair on your local machine
2. Login via `ssh` using your username and designated password
3. Add your public SSH-Keys to the V-Servers `authorized_keys` with the following command:
   1. `ssh-copy-id -i $HOME/.ssh/your-public-key.pub <user>@123.4.5.255`
4. Logout from Server, try logging in with the KEY information only -> `ssh -i <path/to/key> user@host`
   1. You should not be prompted for a password if it works correctly
5. Log in to the V-Server again
6. Disable Password-Login
7. Disable Root-Login

## Description



## Further References