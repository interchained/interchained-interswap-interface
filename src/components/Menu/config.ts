import { MenuEntry } from 'uikit-dev'
import newIcon from 'uikit-dev/images/for-trading-challenge/New-icon.png'
import bridgeBlack from 'uikit-dev/images/for-ui-v2/menu/Bridge-Black.png'
import bridgeWhite from 'uikit-dev/images/for-ui-v2/menu/Bridge-White.png'
import farmBlack from 'uikit-dev/images/for-ui-v2/menu/Farm-Black.png'
import farmWhite from 'uikit-dev/images/for-ui-v2/menu/Farm-White.png'
import gitbookBlack from 'uikit-dev/images/for-ui-v2/menu/Gitbook-Black.png'
import gitbookWhite from 'uikit-dev/images/for-ui-v2/menu/Gitbook-White.png'
import homeBlack from 'uikit-dev/images/for-ui-v2/menu/Home-Black.png'
import homeWhite from 'uikit-dev/images/for-ui-v2/menu/Home-White.png'
import liquidityBlack from 'uikit-dev/images/for-ui-v2/menu/Liquidity-Black.png'
import liquidityWhite from 'uikit-dev/images/for-ui-v2/menu/Liquidity-White.png'
import mutualBlack from 'uikit-dev/images/for-ui-v2/menu/Mutual-fund-Black.png'
import mutualWhite from 'uikit-dev/images/for-ui-v2/menu/Mutual-fund-White.png'
import partnerBlack from 'uikit-dev/images/for-ui-v2/menu/Partnership-Black.png'
import partnerWhite from 'uikit-dev/images/for-ui-v2/menu/Partnership-White.png'
import swapBlack from 'uikit-dev/images/for-ui-v2/menu/Swap-Black.png'
import swapWhite from 'uikit-dev/images/for-ui-v2/menu/Swap-White.png'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: homeBlack,
    iconActive: homeWhite,
    href: `${process.env.REACT_APP_FRONTEND_URL}/`,
    notHighlight: false,
    newTab: false,
  },
  {
    label: 'Exchange',
    icon: swapBlack,
    iconActive: swapWhite,
    href: '/swap',
    notHighlight: false,
    newTab: false,
  },
  {
    label: 'Liquidity',
    icon: liquidityBlack,
    iconActive: liquidityWhite,
    href: '/liquidity',
    notHighlight: false,
    newTab: false,
  },
  {
    label: 'Yield Farming',
    icon: farmBlack,
    iconActive: farmWhite,
    href: `${process.env.REACT_APP_FRONTEND_URL}/farm`,
    notHighlight: false,
    newTab: false,
    items: [
      {
        label: 'Farm',
        href: `${process.env.REACT_APP_FRONTEND_URL}/farm`,
        notHighlight: false,
        newTab: false,
      },
      {
        label: 'Pool',
        href: `${process.env.REACT_APP_FRONTEND_URL}/pool`,
        notHighlight: false,
        newTab: false,
      },
      {
        label: 'Partnership Pool',
        href: `${process.env.REACT_APP_FRONTEND_URL}/partnership-pool`,
        notHighlight: false,
        newTab: false,
      },
    ],
  },
  // {
  //   label: 'Register',
  //   icon: newIcon,
  //   iconActive: newIcon,
  //   calloutClass: 'new',
  //   href: 'https://bsc.definix.com/trading-challenge',
  //   group: 'trading',
  //   notHighlight: false,
  //   newTab: false,
  // },
  // {
  //   label: 'Leaderboard',
  //   icon: newIcon,
  //   iconActive: newIcon,
  //   calloutClass: 'new',
  //   href: 'https://bsc.definix.com/leaderboard',
  //   notHighlight: false,
  //   newTab: false,
  // },
  {
    label: 'Mutual Fund',
    icon: mutualBlack,
    iconActive: mutualWhite,
    href: `${process.env.REACT_APP_FRONTEND_URL}/info`,
    notHighlight: false,
    newTab: false,
    items: [
      {
        label: 'Investors',
        href: `${process.env.REACT_APP_FRONTEND_URL}/info`,
        notHighlight: true,
        newTab: false,
      },
      {
        label: 'Fund Managers',
        href: `${process.env.REACT_APP_FRONTEND_URL}/info`,
        notHighlight: true,
        newTab: false,
      },
      {
        label: 'Network Monitor',
        href: `${process.env.REACT_APP_FRONTEND_URL}/info`,
        notHighlight: true,
        newTab: false,
      },
    ],
  },
  {
    label: 'Bridge',
    icon: bridgeBlack,
    iconActive: bridgeWhite,
    href: 'https://bridge.six.network',
    notHighlight: true,
    newTab: true,
  },
  // {
  //   label: 'Tutorial',
  //   icon: exploreClick,
  //   iconActive: explore,
  //   href: '#',
  //   notHighlight: true,
  //   newTab: false,
  // },
  // {
  //   label: 'Blogs',
  //   icon: exploreClick,
  //   iconActive: explore,
  //   href: '#',
  //   notHighlight: true,
  //   newTab: true,
  // },
  {
    label: 'Gitbook',
    icon: gitbookBlack,
    iconActive: gitbookWhite,
    href: 'https://app.gitbook.com/@sixnetwork/s/definix/',
    notHighlight: true,
    newTab: true,
  },
  {
    label: 'Partnership',
    icon: partnerBlack,
    iconActive: partnerWhite,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfKMRNlTsTCk__s4v_qnwE3Uw4-kro8XRMPVQTS5OE6zX2Uqg/viewform',
    notHighlight: true,
    newTab: true,
  },
]

// const config: MenuEntry[] = [
//   {
//     label: 'Home',
//     icon: 'HomeIcon',
//     href: 'https://definixswap.finance/',
//   },
//   {
//     label: 'Trade',
//     icon: 'TradeIcon',
//     initialOpenState: true,
//     items: [
//       {
//         label: 'Exchange',
//         href: '/swap',
//       },
//       {
//         label: 'Liquidity',
//         href: '/pool',
//       },
//     ],
//   },
//   {
//     label: 'Farms',
//     icon: 'FarmIcon',
//     href: 'https://definixswap.finance/farms',
//   },
//   {
//     label: 'Pools',
//     icon: 'PoolIcon',
//     href: 'https://definixswap.finance/syrup',
//   },
//   {
//     label: 'Lottery',
//     icon: 'TicketIcon',
//     href: 'https://definixswap.finance/lottery',
//   },
//   {
//     label: 'NFT',
//     icon: 'NftIcon',
//     href: 'https://definixswap.finance/nft',
//   },
//   {
//     label: 'Teams & Profile',
//     icon: 'GroupsIcon',
//     items: [
//       {
//         label: 'Leaderboard',
//         href: 'https://definixswap.finance/teams',
//       },
//       {
//         label: 'Your Profile',
//         href: 'https://definixswap.finance/profile',
//       },
//     ],
//   },
//   {
//     label: 'Info',
//     icon: 'InfoIcon',
//     items: [
//       {
//         label: 'Overview',
//         href: 'https://definixswap.info',
//       },
//       {
//         label: 'Tokens',
//         href: 'https://definixswap.info/tokens',
//       },
//       {
//         label: 'Pairs',
//         href: 'https://definixswap.info/pairs',
//       },
//       {
//         label: 'Accounts',
//         href: 'https://definixswap.info/accounts',
//       },
//     ],
//   },
//   {
//     label: 'IFO',
//     icon: 'IfoIcon',
//     href: 'https://definixswap.finance/ifo',
//   },
//   {
//     label: 'More',
//     icon: 'MoreIcon',
//     items: [
//       {
//         label: 'Voting',
//         href: 'https://voting.definixswap.finance',
//       },
//       {
//         label: 'Github',
//         href: 'https://github.com/definixswap',
//       },
//       {
//         label: 'Docs',
//         href: 'https://docs.definixswap.finance',
//       },
//       {
//         label: 'Blog',
//         href: 'https://definixswap.medium.com',
//       },
//     ],
//   },
// ]

export default config
