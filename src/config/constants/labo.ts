// CONFIGURE HERE THE VARIABLES THAT WILL BE CHANGED BEFORE THE PRESALE

//----------------------------------------------------------------------------------------------------------------------------------------------

// LABO ADDRESSES

const laboBusdAddr = '0x9d8Dc16Ed2a9748CE5476010Ace4274B624c87eB'
const laboBnbAddr = '0x3FA8ef7F31DE12d25bed76c3e76f4D29E158A324'
const laboBusdAddrV2 = '0x9d8Dc16Ed2a9748CE5476010Ace4274B624c87eB'
const laboBnbAddrV2 = '0x3FA8ef7F31DE12d25bed76c3e76f4D29E158A324'
const laboAddr = '0x13FC17670A2E1F6143fa2232DDE0AEaEe35165B4'
const masterChef = '0xDb59fC6e509fDd5Ddd1C3Ec188ad0A9626dbe16B'

// LABO RELATED PIDS

const pidLaboBusd = 0
const pidLaboBnb = 1
const pidLabo = 3

// OTHER PIDS THAT ARE REFERENCED THROUGHOUT THE CODE

const pidBnbBusd = 0

// SET countBack TO TRUE TO COUNT BACK AS FAR AS countLength

const countBack = false
const countLength = 2

// CHANGE LABO FOR THE TOKEN BEIGN TESTED

const xPerBlock = "jasvPerBlock" // referenced in getMasterChefAddress()
const pendingX = "pendingJasv"

// SEARCH AND REPLACE THIS STRING IF USING ANY OTHER THAN LABO: await masterChefContract.methods.pendingLabo in \src\state\pools\fetchPoolsUser.ts

// USE OUR CUSTOM WAY OF FETCHING PRICE

const fetchAutomatic = false;
const fetchPriceCustom = false;

// BitQuery RESPONSE POSITIONS

const busdPosition = 0
const tokenPosition = 1

// IS LOCKED

const unlockWalletButton = false;

// IS FARMS CONFIGURED

const isFullyConfigured = true;
const showFarmInfoModal = true;


//----------------------------------------------------------------------------------------------------------------------------------------------

// EDIT ABOVE NOT HERE

const labo = {
    addr: {
        laboBusdAddr,
        laboBnbAddr,
        laboBusdAddrV2,
        laboBnbAddrV2,
        laboAddr,
        masterChef,
    },
    pids: {
        pidLaboBusd, 
        pidLaboBnb,
        pidLabo,
        pidBnbBusd,
        pidList: [
            pidLaboBusd, // LABO-BUSD LP [0]
            pidLaboBnb, // LABO-BNB LP [1]
            pidBnbBusd, // BNB-BUSD LP [2]
            pidLabo, // LABO [11]
        ],
    },
    strings: {
        xPerBlock,
        pendingX
    },
    fetch: {
        fetchAutomatic,
        fetchPriceCustom
    },
    queryPosition: {
        busd: busdPosition,
        token: tokenPosition
    },
    isLocked: {
        unlockWalletButton
    },
    isFullyConfigured,
    showFarmInfoModal
}
 
export default labo;