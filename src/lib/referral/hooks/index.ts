import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as acts  from 'state/actions'

import * as fromReferral  from '../selectors'

// eslint-disable-next-line import/prefer-default-export
export const useReferrals = (account) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (account) {
      dispatch(acts.fetchTotalReferralsDataAsync(account))
      dispatch(acts.fetchTotalReferralCommissionsDataAsync(account))
    }
  }, [account, dispatch])

  const levels = useSelector(fromReferral.getLevels);
  const invited = useSelector(fromReferral.invited);
  const invitedAmount = useSelector(fromReferral.invitedAmount);
  const referrer = useSelector(fromReferral.referrer);
  const rewarded = useSelector(fromReferral.rewarded);
  const lastActionAt = useSelector(fromReferral.lastActionAt);

  return {
    levels,
    invited,
    invitedAmount,
    referrer,
    rewarded,
    lastActionAt,
  }
}
