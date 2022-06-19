import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'
import labo from './labo'


const farms: FarmConfig[] = [
   {
      pid: 2,
      risk: 5,
      lpSymbol: 'BUSD-BNB LP',
      lpAddresses: {
         97: '',
         56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
      },
      tokenSymbol: 'BUSD',
      tokenAddresses: {
         97: '',
         56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      },
      harvestLockup: 0,

      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
      version: 2
   },
   
   {
      pid: labo.pids.pidList[0],
      risk: 5,
      lpSymbol: 'LABO-BUSD LP',
      lpAddresses: {
         97: '',
         56: labo.addr.laboBusdAddr, // (to LABO BUSD LP)
      },
      tokenSymbol: 'LABO',
      tokenAddresses: {
         97: '',
         56: labo.addr.laboAddr,
      },
      harvestLockup: 0,

      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
      version: 1
   },
   {
      pid: labo.pids.pidList[1],
      risk: 5,
      lpSymbol: 'LABO-BNB LP',
      lpAddresses: {
         97: '',
         56: labo.addr.laboBnbAddr, // (to LABO BNB LP ) 
      },
      tokenSymbol: 'LABO',
      tokenAddresses: {
         97: '',
         56: labo.addr.laboAddr,
      },
      harvestLockup: 0,

      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
      version: 1
   },
   
   {
      pid: labo.pids.pidList[2],
      risk: 3,
      lpSymbol: 'BNB-BUSD LP',
      lpAddresses: {
         97: '',
         56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      },
      tokenSymbol: 'BNB',
      tokenAddresses: {
         97: '',
         56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      },
      harvestLockup: 0,
      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
      version: 1
   },
  
   {
      pid: 3,
      risk: 5,
      isTokenOnly: true,
      lpSymbol: 'LABO',
      lpAddresses: {
         97: '',
         56: labo.addr.laboBusdAddr, // change (to LABO BUSD LP)
      },
      tokenSymbol: 'LABO',
      tokenAddresses: {
         97: '',
         56: labo.addr.laboAddr,
      },
      harvestLockup: 0,

      quoteTokenSymbol: QuoteToken.BUSD,
      quoteTokenAdresses: contracts.busd,
   },
]

export default farms
