'use client'

import * as PrimitiveTabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  title: string
  value: string
  isSelected?: boolean
}

export function TabItem({ title, value, isSelected = false }: TabItemProps) {
  return (
    <PrimitiveTabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span className="">{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </PrimitiveTabs.Trigger>
  )
}
