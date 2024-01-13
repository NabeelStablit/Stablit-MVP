from flask import Flask
import ccxt
import pandas as pd

app = Flask(__name__)
ex = ccxt.binanceus()

@app.route('/')
def hello_world():    
    return 'Hello, World!'

@app.route('/price-sETH')
def prices_sETH(): 
    ohlcv = ex.fetch_ohlcv('ETH/USDT', '1m', limit=1000)
    print('first entry', ohlcv[0])
    ohlcv = pd.DataFrame(ohlcv)
    ohlcv = ohlcv[4]
    print('current price of sETH', ohlcv.mean())
    # price of zETH to be determined using the total supply of tokens and shit
    # print(len(ohlcv[0]))
    return 'Done'

if __name__ == '__main__':
    app.run(debug=True)