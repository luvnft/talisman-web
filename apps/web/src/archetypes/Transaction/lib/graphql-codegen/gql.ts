/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query txQuery(\n    $addresses: [String!]!\n    $limit: Float\n    $olderThanId: String\n    $newerThanId: String\n    $searchQuery: String\n  ) {\n    transactionsByAddress(\n      addresses: $addresses\n      limit: $limit\n      olderThanId: $olderThanId\n      newerThanId: $newerThanId\n      query: $searchQuery\n    ) {\n      id\n      name\n      chainId\n      ss58Format\n      blockNumber\n      blockHash\n      timestamp\n      args\n      signer\n      relatedAddresses\n      explorerUrl\n\n      parsed {\n        __typename\n\n        ... on ParsedTransfer {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          from\n          to\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedCrowdloanContribute {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          contributor\n          amount\n          fund\n          fee\n          tip\n          success\n        }\n        ... on ParsedStake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          staker\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedUnstake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          unstaker\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedAddLiquidity {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedRemoveLiquidity {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedAddProvision {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedRefundProvision {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedSwap {\n          chainId\n          tokens {\n            logo\n            symbol\n            decimals\n            liquidityChange\n          }\n          trader\n          fee\n          tip\n          success\n        }\n        ... on ParsedSetIdentity {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          info\n          fee\n          tip\n          success\n        }\n        ... on ParsedClearedIdentity {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolStake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          bonded\n          joined\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolUnstake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          era\n          poolId\n          member\n          points\n          balance\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolPaidOut {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          payout\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolWithdrawn {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          points\n          balance\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolMemberRemoved {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          fee\n          tip\n          success\n        }\n        ... on ParsedVote {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          voter\n          referendumIndex\n          referendumUrl\n          voteNumber\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedEthereumExec {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          from\n          to\n          amount\n          fee\n          tip\n          success\n        }\n      }\n    }\n  }\n": types.TxQueryDocument,
    "\n  query latestTxQuery($addresses: [String!]!, $searchQuery: String) {\n    transactionsByAddress(addresses: $addresses, query: $searchQuery, limit: 1) {\n      id\n    }\n  }\n": types.LatestTxQueryDocument,
};

export function graphql(source: "\n  query txQuery(\n    $addresses: [String!]!\n    $limit: Float\n    $olderThanId: String\n    $newerThanId: String\n    $searchQuery: String\n  ) {\n    transactionsByAddress(\n      addresses: $addresses\n      limit: $limit\n      olderThanId: $olderThanId\n      newerThanId: $newerThanId\n      query: $searchQuery\n    ) {\n      id\n      name\n      chainId\n      ss58Format\n      blockNumber\n      blockHash\n      timestamp\n      args\n      signer\n      relatedAddresses\n      explorerUrl\n\n      parsed {\n        __typename\n\n        ... on ParsedTransfer {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          from\n          to\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedCrowdloanContribute {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          contributor\n          amount\n          fund\n          fee\n          tip\n          success\n        }\n        ... on ParsedStake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          staker\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedUnstake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          unstaker\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedAddLiquidity {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedRemoveLiquidity {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedAddProvision {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedRefundProvision {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedSwap {\n          chainId\n          tokens {\n            logo\n            symbol\n            decimals\n            liquidityChange\n          }\n          trader\n          fee\n          tip\n          success\n        }\n        ... on ParsedSetIdentity {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          info\n          fee\n          tip\n          success\n        }\n        ... on ParsedClearedIdentity {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolStake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          bonded\n          joined\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolUnstake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          era\n          poolId\n          member\n          points\n          balance\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolPaidOut {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          payout\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolWithdrawn {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          points\n          balance\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolMemberRemoved {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          fee\n          tip\n          success\n        }\n        ... on ParsedVote {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          voter\n          referendumIndex\n          referendumUrl\n          voteNumber\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedEthereumExec {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          from\n          to\n          amount\n          fee\n          tip\n          success\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query txQuery(\n    $addresses: [String!]!\n    $limit: Float\n    $olderThanId: String\n    $newerThanId: String\n    $searchQuery: String\n  ) {\n    transactionsByAddress(\n      addresses: $addresses\n      limit: $limit\n      olderThanId: $olderThanId\n      newerThanId: $newerThanId\n      query: $searchQuery\n    ) {\n      id\n      name\n      chainId\n      ss58Format\n      blockNumber\n      blockHash\n      timestamp\n      args\n      signer\n      relatedAddresses\n      explorerUrl\n\n      parsed {\n        __typename\n\n        ... on ParsedTransfer {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          from\n          to\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedCrowdloanContribute {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          contributor\n          amount\n          fund\n          fee\n          tip\n          success\n        }\n        ... on ParsedStake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          staker\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedUnstake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          unstaker\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedAddLiquidity {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedRemoveLiquidity {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedAddProvision {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedRefundProvision {\n          chainId\n          fee\n          tip\n          success\n        }\n        ... on ParsedSwap {\n          chainId\n          tokens {\n            logo\n            symbol\n            decimals\n            liquidityChange\n          }\n          trader\n          fee\n          tip\n          success\n        }\n        ... on ParsedSetIdentity {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          info\n          fee\n          tip\n          success\n        }\n        ... on ParsedClearedIdentity {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolStake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          bonded\n          joined\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolUnstake {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          era\n          poolId\n          member\n          points\n          balance\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolPaidOut {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          payout\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolWithdrawn {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          points\n          balance\n          fee\n          tip\n          success\n        }\n        ... on ParsedPoolMemberRemoved {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          poolId\n          member\n          fee\n          tip\n          success\n        }\n        ... on ParsedVote {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          voter\n          referendumIndex\n          referendumUrl\n          voteNumber\n          amount\n          fee\n          tip\n          success\n        }\n        ... on ParsedEthereumExec {\n          chainId\n          tokenLogo\n          tokenSymbol\n          tokenDecimals\n          from\n          to\n          amount\n          fee\n          tip\n          success\n        }\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query latestTxQuery($addresses: [String!]!, $searchQuery: String) {\n    transactionsByAddress(addresses: $addresses, query: $searchQuery, limit: 1) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query latestTxQuery($addresses: [String!]!, $searchQuery: String) {\n    transactionsByAddress(addresses: $addresses, query: $searchQuery, limit: 1) {\n      id\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;