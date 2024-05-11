import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

type Props = {
  message?: string
}

export const FormError = ({ message }: Props) => {

  if (!message) {
    return null
  }

  return <div className='flex bg-destructive/15 p-3 rounded-md items-center gap-x-2 text-sm text-destructive'>
    <ExclamationTriangleIcon className='h-4 w-4' />
    <p>{message}</p>
  </div>
}