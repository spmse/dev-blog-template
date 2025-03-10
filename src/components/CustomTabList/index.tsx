import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TabItemProps from "@docusaurus/theme-classic"

import {ReactNode, ReactElement } from 'react';

interface ICustomTabListProps {
    tabs: ICustomTabProps[]
    customTabGroup?: string
}

interface ICustomTabProps {
    label: string;
    value: string;
    children: ReactNode | string
}

const CustomTabList = ({ tabs, customTabGroup }: ICustomTabListProps) => {
    
    const tabElements = tabs.map((tab: ICustomTabProps) => (
        <TabItem value={tab.value} label={tab.label}>
            {tab.children}
        </TabItem>
    ))
    
    return (
        <Tabs groupId={customTabGroup}>
            {tabElements}
        </Tabs>
    )
}

export default CustomTabList;