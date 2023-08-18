import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Search,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import { TextInput } from '../Form/TextInput'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <TextInput.Root>
        <TextInput.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </TextInput.Prefix>
        <TextInput.Control type="text" placeholder="Search" />
      </TextInput.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UserSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
