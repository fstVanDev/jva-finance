import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { soushHarvest, soushHarvestBnb, harvest, addReferrer } from 'utils/callHelpers'
import { Address } from 'config/constants/types'
import { useReferral} from './useContract'

export const useReferralStorage = (referree: string) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const referralStorageContract = useReferral()

  const handleReferral = useCallback(async () => {
    const txHash = await addReferrer(referralStorageContract, referree, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, referree, referralStorageContract])

  return { onReferral: handleReferral }
}


