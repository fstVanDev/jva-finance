import { useWallet } from 'use-wallet'

function useIsConnected(): boolean {
  const { status } = useWallet()

  return status === 'connected'
}

export default useIsConnected
