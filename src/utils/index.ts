import type { AddOnsType, Plan } from '@/types'
import arcadeIcon from '@/assets/images/icon-arcade.svg'
import advancedIcon from '@/assets/images/icon-advanced.svg'
import proIcon from '@/assets/images/icon-pro.svg'

export const addsOne: Array<AddOnsType> = [
  {
    title: 'online service',
    price: 1,
    subtitle: 'access to multiple games'
  },
  {
    title: 'large storage',
    price: 2,
    subtitle: 'extra 1TB of cloud save'
  },
  {
    title: 'customizable profile',
    price: 2,
    subtitle: 'custom theme on your profile'
  }
]
export const plans: Plan[] = [
  {
    icon: arcadeIcon,
    title: 'arcade',
    pricePerMonth: 9
  },
  {
    icon: advancedIcon,
    title: 'advanced',
    pricePerMonth: 12
  },
  {
    icon: proIcon,
    title: 'pro',
    pricePerMonth: 15
  }
]
