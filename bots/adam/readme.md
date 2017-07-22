# Description
Adam is the first bot created to learn how to play games on it's own.

# Learning method
* before triggering an input, we check if the state is in our memory
* if the state is repeating we consider the previous move a bad one
* if it was a bad move we add the keyCode to the previous move log's array of bad moves
* we trigger a random input supported by the game (could be learnt buy first triggering every key)
* we repeat
