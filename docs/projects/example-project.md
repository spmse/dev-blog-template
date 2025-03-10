# Project-Title

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
A simple and brief description and intro to the project.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';
import CustomTabList from '@site/src/components/CustomTabList';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<GithubLinkAdmonition 
    link="https://github.com/spmse/dev-blog-template"
    title="Github Tip" 
    type="note"
>
    Checkout this repository to see the code/implementation

    <CustomTabList
        customTabGroup="demo1"
        tabs={[
            {label: "macOs", 
            value: "macos", 
            children: <>do not turn of the mac</> },
            {label: "Windows PowerShell", 
            value: "pwsh", 
            children: <>
            
            <pre>
            <code>
            $env:IMAGE="my-image"
            </code>
            </pre>

            </> }
        ]}
    />

    <Tabs groupId="test-id">
            
        <TabItem value="test" label="guys">
            <span>hello testing guys</span>
        </TabItem>
        <TabItem value="test2" label="girls">
            <span>hello testing girls</span>
            <p>hello testing girls</p>
            <p>hello testing girls</p>
            <p>hello testing girls</p>
            <p>hello testing girls</p>
            <span>hello testing girls</span>
            <span>hello testing girls</span>
            <span>hello testing girls</span>
            <span>hello testing girls</span>
            <span>hello testing girls</span>
            <span>hello testing girls</span>

            ```tsx showLineNumbers title="src/components/SampleComponent.tsx"
            interface ISampleComponentProps {};
            export const SampleComponent = (props: ISampleComponentProps) => {
                return (
                    <>
                        <h1>I am a sample component</h1>
                    </>
                )
            };
            ```


        </TabItem>
    </Tabs>


</GithubLinkAdmonition>

## Quickstart

1. do X
2. do Y

## Description

## Further References