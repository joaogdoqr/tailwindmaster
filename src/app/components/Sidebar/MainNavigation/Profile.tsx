import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../../Button'

export const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        src="https://github.com/joaogdoqr.png"
        alt="user profile image"
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <span className="text-sm font-semibold text-zinc-800">João Pedro</span>
        <span className="truncate text-sm text-zinc-500">
          joao.guerreiro@doqr.com.br duiwagdiyawgdwaygwad
        </span>
      </div>
      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
