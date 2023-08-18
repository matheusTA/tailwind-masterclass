'use client'

import { useState } from 'react'
import * as PrimitiveTabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function Tabs() {
  const [selectedTab, setSelectedTab] = useState('my-details')

  function isSelected(tabValue: string) {
    return selectedTab === tabValue
  }

  return (
    <PrimitiveTabs.Root
      defaultValue="my-details"
      value={selectedTab}
      onValueChange={setSelectedTab}
    >
      <PrimitiveTabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="my-details"
          isSelected={isSelected('my-details')}
        />
        <TabItem
          title="Profile"
          value="profile"
          isSelected={isSelected('profile')}
        />
        <TabItem
          title="Password"
          value="password"
          isSelected={isSelected('password')}
        />
        <TabItem title="Team" value="team" isSelected={isSelected('team')} />
        <TabItem title="Plan" value="plan" isSelected={isSelected('plan')} />
        <TabItem
          title="Billing"
          value="billing"
          isSelected={isSelected('billing')}
        />
        <TabItem title="Email" value="email" isSelected={isSelected('email')} />
        <TabItem
          title="Notification"
          value="notifications"
          isSelected={isSelected('notifications')}
        />
        <TabItem
          title="Integrations"
          value="integrations"
          isSelected={isSelected('integrations')}
        />
        <TabItem title="API" value="api" isSelected={isSelected('api')} />
      </PrimitiveTabs.List>
    </PrimitiveTabs.Root>
  )
}
