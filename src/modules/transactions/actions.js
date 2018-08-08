import * as types from './types'

const sendTransactionStart = payload => ({
  type: types.SEND_TRANSACTION_START,
  payload,
})
const sendTransactionPending = payload => ({
  type: types.SEND_TRANSACTION_PENDING,
  payload,
})
const sendTransactionSucceeded = payload => ({
  type: types.SEND_TRANSACTION_SUCCEEDED,
  payload,
})
const sendTransactionFailed = payload => ({
  type: types.SEND_TRANSACTION_FAILED,
  payload,
})
const txnMining = payload => ({
  type: types.TXN_MINING,
  payload,
})
const clearTxn = payload => ({
  type: types.CLEAR_TXN,
  payload,
})
const openTxPanel = (listing, methodName) => ({
  type: types.OPEN_TX_PANEL,
  listing,
  methodName,
})

export {
  sendTransactionStart,
  sendTransactionPending,
  sendTransactionSucceeded,
  sendTransactionFailed,
  txnMining,
  clearTxn,
  openTxPanel,
}
