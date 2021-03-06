declare LONG_EXIT;

input trailType = {default modified, unmodified};
input ATRPeriod = 5;
input ATRFactor = 3.5;
input firstTrade = {default long, short};
input tradeSize = 1;

def condition = ATRTrailingStop(trailType, ATRPeriod, ATRFactor, firstTrade).sellSignal;

SetColor(GetColor(0));

addOrder(condition, open[-1], tradeSize);