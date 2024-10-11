'use client'

import { Root, List } from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export const SettingsTabs = () => {
  const [currencTab, setCurrentTab] = useState('tab1')

  return (
    <Root value={currencTab} onValueChange={setCurrentTab}>
      <List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="My details"
          isSelected={currencTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelected={currencTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelected={currencTab === 'tab3'}
        />
        <TabItem value="tab4" title="Team" isSelected={currencTab === 'tab4'} />
        <TabItem value="tab5" title="Plan" isSelected={currencTab === 'tab5'} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelected={currencTab === 'tab6'}
        />
        <TabItem
          value="tab7"
          title="Email"
          isSelected={currencTab === 'tab7'}
        />
        <TabItem
          value="tab8"
          title="Notifications"
          isSelected={currencTab === 'tab8'}
        />
        <TabItem
          value="tab9"
          title="Integrations"
          isSelected={currencTab === 'tab9'}
        />
        <TabItem
          value="tab10"
          title="Api"
          isSelected={currencTab === 'tab10'}
        />
      </List>
    </Root>
  )
}
