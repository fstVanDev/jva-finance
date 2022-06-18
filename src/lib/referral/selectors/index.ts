import { createSelector } from '@reduxjs/toolkit'

import { State } from 'state/types'

const getData = (state: State) => state.referrals.data as any;

export const getLevels = createSelector(getData, (data) => {
  const slice = data?.totalReferrals as string[];

  const [first = 0, second = 0, third = 0] = Array.isArray(slice) ? slice : [];

  return {
    first: Number(first),
    second: Number(second),
    third: Number(third),
  };
});

export const invitedAmount = createSelector(getData, (data): number => {
  const slice = data?.totalReferralCommissions as string[];
  const [, , amount] = Array.isArray(slice) ? slice : [];

  return Number(amount) || 0;
});

export const invited = createSelector(getData, (data): string[] => {
  const slice = data?.totalReferralCommissions as string[];
  const dataSlice = Array.isArray(slice) ? slice : [];

  // list of the referral addresses
  return Array.isArray(dataSlice[4]) ? dataSlice[4] : [];
});

export const referrer = createSelector(getData, (data): string => {
  const slice = data?.totalReferralCommissions as any[];
  const [referer] = Array.isArray(slice) ? slice : [];

  return referer || '';
});

export const rewarded = createSelector(getData, (data): number => {
  const slice = data?.totalReferralCommissions as any[];
  const [, reward] = Array.isArray(slice) ? slice : [];

  return reward || 0;
});

export const lastActionAt = createSelector(getData, (data): Date => {
  const slice = data?.totalReferralCommissions as any[];
  const info = Array.isArray(slice) ? slice : [];

  return info[3] ? new Date(info[3] * 1000) : null
});
