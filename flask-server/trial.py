import ccxt 
ex = ccxt.bitget()

ohlcv = ex.fetch_ohlcv('ETH/USDT', '1m', limit=1000)
print(ex, 'Done', ohlcv)