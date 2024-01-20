from flask import Flask, jsonify
import ccxt
import pandas as pd
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def prices_sETH(): 
    ex = ccxt.binanceus({
        'apiKey': 'FUgqKtAvxxxxxxxxxxxxxxx4k4kzNwHcJw8g1FGCb2YYB0mkQEqeGzDNeuiJHbxlzqbkSHfYf',
        'secret': 'n5gqnfvyeGxxxxxxxxxxxxxxx4mRUkFBp4DacHijYiDxZDAmaoOcWzzcnEC4bltwCbeuTkrJwuq',
        'timeout': 30000,
        'enableRateLimit': True,
    })
    ohlcv = ex.fetch_ohlcv('ETH/USDT', '1m', limit=1000)
    return jsonify({'price': np.around(np.mean([entry[4] for entry in ohlcv]), decimals=2).astype(str)})

if __name__ == '__main__':
    app.run(debug=True)
